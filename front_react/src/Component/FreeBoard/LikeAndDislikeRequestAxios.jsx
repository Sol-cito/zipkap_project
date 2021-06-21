import axios from 'axios';

const LikeAndDislikeRequestAxios = (post_seq, bit, callback) => {
    var targetUrl = '';
    if (bit === 1) {
        targetUrl = '/api/freeBoard/likePost';
    } else if (bit === 2) {
        targetUrl = '/api/freeBoard/dislikePost';
    }

    axios(
        {
            url: targetUrl,
            method: 'post',
            headers: {
                "Content-Type": `application/json ; charset=utf-8`
            }, // data 방식을 json으로 세팅
            // json으로 변환하여 전송
            data: JSON.stringify(post_seq)
        }
    ).then(function (response) {
        console.log("LikeAndDislikeRequestAxios 결과 : " + response.data)
        if (response.status === 200) {
            callback(response.data);
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
        }
    });
};

export default LikeAndDislikeRequestAxios;