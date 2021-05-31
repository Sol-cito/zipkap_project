import axios from 'axios';

const checkCurPasswordRequestAxios = (curPassword, isCurPWValid) => {
    axios(
        {
            url: '/api/user/checkCurPassword',
            method: 'post',
            headers: {
                "Content-Type": `application/json ; charset=utf-8`
            },
            data: curPassword
        }
    ).then(function (response) {
        console.log("비밀번호 확인 결과 : " + response.data)
        if (response.data === true) {
            isCurPWValid(true);
        } else {
            isCurPWValid(false);
        }
    }).catch(function (error) {
        if (error.response) {
            alert("[ERROR] 서버의 응답에 문제가 있습니다. \n"
                + " - 상태코드 : " + error.response.status)
        } else if (error.request) {
            alert("[ERROR] 서버가 요청에 응답하지 않습니다.")
        } else {
            alert("[ERROR] 요청 설정 중에 문제가 발생하였습니다.")
            console.log(error);
            console.log(error)
        }
    });
};

const changePasswordRequestAxios = (newPassword, callback) => {
    axios(
        {
            url: '/api/user/changePassword',
            method: 'post',
            headers: {
                "Content-Type": `application/json ; charset=utf-8`
            },
            data: newPassword
        }
    ).then(function (response) {
        if (response.data === true) {
            callback(true);
        } else {
            callback(false);
        }
    }).catch(function (error) {
        if (error.response) {
            alert("[ERROR] 서버의 응답에 문제가 있습니다. \n"
                + " - 상태코드 : " + error.response.status)
        } else if (error.request) {
            alert("[ERROR] 서버가 요청에 응답하지 않습니다.")
        } else {
            alert("[ERROR] 요청 설정 중에 문제가 발생하였습니다.")
            console.log(error);
            console.log(error)
        }
    });
};

export { checkCurPasswordRequestAxios, changePasswordRequestAxios};