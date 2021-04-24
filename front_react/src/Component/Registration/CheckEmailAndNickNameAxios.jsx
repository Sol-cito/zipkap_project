import axios from 'axios';

/* 중복 Email, NickName 여부 검증 따로 모듈화함 */

const checkEmailAndNickNameExistence = (targetData, formData, callback) => {
    var result = false;
    var APIurl = "";
    if (targetData === "email") {
        APIurl = "checkDuplicateEmail";
    } else if (targetData === "nickName") {
        APIurl = "checkDuplicateNickName";
    }

    console.log("[REACT] 이메일체크 formData : " + JSON.stringify(formData));
    axios(
        {
            url: "/api/user/" + APIurl,
            method: "POST",
            headers: { "Content-Type": `application/json ; charset=utf-8` }, // data 방식을 json으로 세팅
            // json으로 변환하여 전송
            data: JSON.stringify(formData)
        }
    ).then(function (response) {
        console.log("사이트 응답 결과 : " + response.status);
        console.log("중복 검사 결과 : " + response.data);
        result = response.data;
        callback(result); // 비동기 응답 콜백함수 호출
    }).catch(function (error) {
        if (error.response) {
            alert("[ERROR] 서버의 응답에 문제가 있습니다. \n"
                + " - 상태코드 : " + error.response.status)
        } else if (error.request) {
            alert("[ERROR] 서버가 요청에 응답하지 않습니다.")
        } else {
            alert("[ERROR] 요청 설정 중에 문제가 발생하였습니다.")
        }
    });
};

export default checkEmailAndNickNameExistence;