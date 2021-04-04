import React from 'react';
import axios from 'axios';
import './Registration.css'


function Registration() {
    const handleSubmit = (e) => {
        e.preventDefault(); // 
        axios(
            {
                url: '/test',
                method: 'get',
                // baseURL: 'http://localhost:8080',
                // withCredentials: true,
            }
        ).then(function (response) {
            alert("가죠염 : " + response.data);
        });
    }

    return (
        <div className="registration_div">
            <div>
                <span>회원가입</span>
            </div>
            <form className="registration_form" onSubmit={handleSubmit}>
                <input className="registration_input" placeholder="이메일 주소" />
                <input className="registration_input" placeholder="성명" />
                <input className="registration_input" placeholder="닉네임" />
                <input className="registration_input" type="password" placeholder="비밀번호" />
                <input className="registration_input" type="password" placeholder="비밀번호 확인" />
                <div>
                    <button className="registration_submit" type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;
