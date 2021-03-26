
import pymysql
from . import logger
#db

__configure__ = None
__connection__ = None

def setconfigure(conf):
    global __configure__
    __configure__ = conf
    for key in ["db_url" ,"db_usr","db_pwd","db_name"]:
        if key not in conf.keys():
            raise Exception(key+" key not exist in config")
    return __configure__

def conn():
    global __connection__
    conf = __configure__
    if __connection__ == None:
        _conn = pymysql.connect(host=conf["db_url"], user=conf["db_usr"], 
                               password=conf["db_pwd"], db=conf["db_name"],
                               charset='utf8')
        __connection__ = _conn
    return __connection__

def makequery(tablename, data, columnMapper,typeMapper):
    sql = "insert into " + tablename +" ("
    for i,d in enumerate(data):
        sql += ("," if i > 0 else "") + columnMapper[tablename][d]
    sql += ") values ("
    for i,d in enumerate(data):
        if columnMapper[tablename][d] in typeMapper:
            if typeMapper[columnMapper[tablename][d]] == 'int':
                valuetext = ("0" if data[d] == None else data[d])
            else:
                valuetext = "'" + ("" if data[d] == None else data[d])  + "'"
        else:
            valuetext = "'" + ("" if data[d] == None else data[d])  + "'"
        sql += ("," if i > 0 else "") + valuetext
    sql += ")"
    return sql

def sel_pk(date,code):
    sql = "select concat(deal_day,'+',serial_number,'+',apartment_name,'+',floor) from tb_api00 where LEFT(deal_day,6) = '" + date +"'" 
    sql += "and regional_code = '" + code + "'"
    cur = conn().cursor()
    cur.execute(sql)
    return set(map(lambda x : x[0], cur.fetchall()))

@logger.log_with_trycatch
def execute_commit(sql):
    conn().cursor().execute(sql)
    conn().commit()
