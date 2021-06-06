import moment from 'moment';


/* currentMillTime 형태로 받은 날짜 형태를 바꾸는 함수 모듈화함. */

export const convertNumberIntoDateFormat = (curTime) => {
    // return moment(new Date(curTime)).format('YYYY-MM-DD HH:mm:ss');
    return moment(new Date(curTime)).format('YYYY-MM-DD');
};

export const convertNumberIntoDateFormatWithDetail = (curTime) => {
    return moment(new Date(curTime)).format('YYYY-MM-DD HH시 mm분 ss초');
};