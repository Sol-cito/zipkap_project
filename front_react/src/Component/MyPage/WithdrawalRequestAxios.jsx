import axios from 'axios';

const withdrawalRequestAxios = (callback) => {
    axios(
        {
            url: '/api/user/withdrawal',
            method: 'post',
            headers: {
                "Content-Type": `application/json ; charset=utf-8`
            }
        }
    ).then(function (response) {
        console.log("회원탈퇴 결과 : " + response.data)
        if (response.data === "WithdrawalSuccess") {
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

export default withdrawalRequestAxios;