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
    for job in joblist:
        totalCount, itemlist = work(job,1,jobConfiguration)
        insertdata(totalCount,itemlist,None,columnMapper,typeMapper)
        for i in range(1,int(totalCount)//50):
            totalCount, itemlist = work(job,1+i,jobConfiguration)
            insertdata(totalCount,itemlist,None,columnMapper,typeMapper)


def insertdata(totalCount,itemlist,indb,columnMapper,typeMapper):
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
        item_location_key = ['도로명',
                            '도로명시군구코드',
                            '도로명코드',
                            '법정동',
                            '법정동본번코드',
                            '법정동부번코드',
                            '법정동시군구코드',
                            '법정동읍면동코드',
                            '법정동지번코드',
                            '지번',
                            '지역코드'
                            ]
        
        sql = ''
        sql += '\n' + dbwork.makequery("tb_location",item_location,columnMapper,typeMapper)
        sql += '\n' + dbwork.makequery("tb_apt",item_trade,columnMapper,typeMapper)
        sql += '\n' + dbwork.makequery("tb_transaction",item_transaction,columnMapper,typeMapper)
        with open('sql','a',encoding='utf8') as f:
            f.write(sql+"\n")



if __name__ == "__main__":
    
    jobConfiguration = (configmaker.readconf("jobConfiguration.json"))
    regnCodes = (configmaker.readconf("regnCodes.json"))
    columnMapper = (configmaker.readconf("columnMapper.json"))
    
    logger.setconfigure(jobConfiguration)
    dbwork.setconfigure(jobConfiguration)
    jobs.setconfigure(jobConfiguration)

    apiurl = jobConfiguration["apiurl"]
    joblist = jobs.createjob(regnCodes,['202102'])
    result = getitemlist(joblist,columnMapper,{'deal_amount':'int'})



    


