from zipgapbot import apirequest,configmaker,dbwork,jobs
from zipgapbot import logger
import time
import json
import requests


def work(job,page,jobConfiguration):
    job["pageNo"] = str(page) 
    job["numOfRows"] = '50'
    job["ServiceKey"] = jobConfiguration["apikey"]
    resultCode, totalCount, itemlist = apirequest.get_response(jobConfiguration["apiurl"],job)
    while resultCode != "00":
        time.sleep(0.1)
        resultCode, totalCount, itemlist = apirequest.get_response(jobConfiguration["apiurl"],job)
    return totalCount, itemlist
    

def getitemlist(joblist,columnMapper,typeMapper):
    global que
    for job in joblist:
        totalCount, itemlist = work(job,1,jobConfiguration)
        insertdata(totalCount,itemlist,None,columnMapper,typeMapper)
        for i in range(1,int(totalCount)//50):
            totalCount, itemlist = work(job,1+i,jobConfiguration)
            insertdata(totalCount,itemlist,None,columnMapper,typeMapper)
    flush_que()

def insertdata(totalCount,itemlist,indb,columnMapper,typeMapper):
    global que
    for item in itemlist:
        if '일련번호' not in item:
            continue
        item['deal_day'] = ''.join([item['년'],item['월'].zfill(2),item['일'].zfill(2)])
        if '해제사유발생일' in item and item['해제사유발생일'] != None:
            item['해제사유발생일'] = item['해제사유발생일'].replace(".","")
        try:
            del item['년']
            del item['월']
            del item['일']
        except KeyError:
            pass
        item['거래금액'] = item['거래금액'].replace(",","")
        item['전용면적'] = int(float(item['전용면적']) * 10000)


        citem = {}
        for key in item:
            citem[columnMapper[key]] = "" if item[key] == None else item[key]   
        if len(que) >= 99:
            flush_que()
            item
        else:
            que.append(citem)

        
        
def flush_que():
    global que
    jsonval = json.dumps(que)
    que = []
    URL = 'http://localhost:8080/api/data/update'
    res = requests.post(URL, data=jsonval, headers = {'Content-Type':'application/json'}) 
    print(res.text)
    time.sleep(0.1)
    return que


if __name__ == "__main__":
    que = []
    jobConfiguration = (configmaker.readconf("jobConfiguration.json"))
    regnCodes = (configmaker.readconf("regnCodes.json"))
    columnMapper = (configmaker.readconf("columnMapper.json"))
    
    logger.setconfigure(jobConfiguration)
    dbwork.setconfigure(jobConfiguration)
    jobs.setconfigure(jobConfiguration)

    apiurl = jobConfiguration["apiurl"]
    joblist = jobs.createjob(regnCodes,['202104'])
    result = getitemlist(joblist,columnMapper,{'deal_amount':'int'})



    


