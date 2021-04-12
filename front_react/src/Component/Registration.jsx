import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'


function Registration() {
    const [email, setEmail] = useState("empty");
    const [name, setName] = useState("empty");
    const [nickName, setNickName] = useState("empty");
    const [password, setPassword] = useState("empty");


    /* form input 이 변경될 때마다 hook을 set하는 리스너 함수 */
    const handleFromChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            case "nickName":
                setNickName(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
        }
    }


    /* e는 event를 뜻하고, 대상은 e.target.'대상'으로 선택 */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* 훅 데이터를 묶어서 전송할 객체 */
        const formData = {
            email: email,
            name: name,
            nickName: nickName,
            password: password
        }

        console.log("[REACT] 회원가입 formData : " + JSON.stringify(formData));

        try {
            axios(
                {
                    url: '/user/registration',
                    method: 'post',
                    headers: { "Content-Type": `application/json ; charset=utf-8` }, // data 방식을 json으로 세팅
                    // json으로 변환하여 전송
                    data: JSON.stringify(formData)
                }
            ).then(function (response) {
                alert("가죠염 : " + response.data);
                console.log(response.data);
            });
        } catch (e) {
            alert("에러당");
        }
    }

    return (
        <div className="registration_div">
            <div>
                <span>회원가입</span>
            </div>
            <form className="registration_form" onSubmit={handleSubmit}>
                <input className="registration_input" name="email" placeholder="이메일 주소" onChange={handleFromChange} />
                <input className="registration_input" name="name" placeholder="성명" onChange={handleFromChange} />
                <input className="registration_input" name="nickName" placeholder="닉네임" onChange={handleFromChange} />
                <input className="registration_input" name="password" type="password" placeholder="비밀번호" onChange={handleFromChange} />
                <input className="registration_input" type="password" placeholder="비밀번호 확인" />
                <div>
                    <button className="registration_submit" type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;

