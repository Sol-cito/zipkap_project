from zipgapbot import apirequest,configmaker,dbwork,jobs
from zipgapbot import logger
import time




def work(job,page,jobConfiguration):
    job["pageNo"] = str(page) 
    job["numOfRows"] = '50'
    job["ServiceKey"] = jobConfiguration["apikey"]
    resultCode, totalCount, itemlist = apirequest.get_response(jobConfiguration["apiurl"],job)
    while resultCode != "00":
        time.sleep(1)
        resultCode, totalCount, itemlist = apirequest.get_response(jobConfiguration["apiurl"],job)
    return totalCount, itemlist
    

def getitemlist(joblist,columnMapper,typeMapper):
    result = {}
    for job in joblist:
        indb = dbwork.sel_pk(job['DEAL_YMD'],job['LAWD_CD'])
        totalCount, itemlist = work(job,1,jobConfiguration)
        result.update(insertdata(totalCount,itemlist,indb,columnMapper,typeMapper))
        for i in range(1,int(totalCount)//50):
            totalCount, itemlist = work(job,1+i,jobConfiguration)
            result.update(insertdata(totalCount,itemlist,indb,columnMapper,typeMapper))
    return result   


def insertdata(totalCount,itemlist,indb,columnMapper,typeMapper):
    result = {}
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
        pk = '+'.join([item['deal_day'],item['일련번호'],item['아파트'],item['층']])
        if pk in indb:
            result[pk] = 'already exist'
        else:
            item['거래금액'] = item['거래금액'].replace(",","")
            sql = dbwork.makequery("tb_api00",item,columnMapper,typeMapper)
            dbwork.execute_commit(sql)
            result[pk] = 'insert'
    return result



if __name__ == "__main__":
    
    jobConfiguration = (configmaker.readconf("jobConfiguration.json"))
    regnCodes = (configmaker.readconf("regnCodes.json"))
    columnMapper = (configmaker.readconf("columnMapper.json"))
    
    logger.setconfigure(jobConfiguration)
    dbwork.setconfigure(jobConfiguration)
    jobs.setconfigure(jobConfiguration)

    apiurl = jobConfiguration["apiurl"]
    joblist = jobs.createjob(regnCodes)
    result = getitemlist(joblist,columnMapper,{'deal_amount':'int'})



    


