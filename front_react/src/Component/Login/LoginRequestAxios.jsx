import axios from 'axios';

/* refreshToken cookie를 주고받기 위한 설정 */
axios.defaults.withCredentials = true;

const loginRequestAxios = (formData, callback) => {
    console.log("[REACT] 로그인 formData : " + JSON.stringify(formData));

    axios(
        {
            url: '/api/user/login',
            method: 'post',
            headers: { 
                "Content-Type": `application/json ; charset=utf-8` }, // data 방식을 json으로 세팅
            // json으로 변환하여 전송
            data: JSON.stringify(formData)
        }
    ).then(function (response) {
        alert("로그인 성공 : " + response.JSON);
        /*  JWT 토큰 */
        const { accessToken } = response.data;
        callback(true); // 콜백으로 비동기 응답을 넘긴다.
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

export default loginRequestAxios;