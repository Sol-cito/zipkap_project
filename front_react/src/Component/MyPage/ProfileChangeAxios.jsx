import axios from 'axios';

const ProfileChangeAxios = (profileInfo, callback) => {
    axios(
        {
            url: '/api/user/changeProfile',
            method: 'patch',
            headers: {
                "Content-Type": `application/json ; charset=utf-8`
            },
            data: JSON.stringify(profileInfo)
        }
    ).then(function (response) {
        callback(response);
    }).catch(function (error) {
        if (error.response) {
            alert("[ERROR] 서버의 응답에 문제가 있습니다. \n"
                + " - 상태코드 : " + error.response.status)
        } else if (error.request) {
            console.log(error.request);
            alert("[ERROR] 서버가 요청에 응답하지 않습니다.")
        } else {
            alert("[ERROR] 요청 설정 중에 문제가 발생하였습니다.")
            console.log(error);
            console.log(error)
        }
    });
};

export default ProfileChangeAxios;