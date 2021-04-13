import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form'; // form 검증을 도와주는 라이브러리
import axios from 'axios';
import { checkEmailValidity, checkNicknameValidity, checkPasswordValidity } from './RegistrationRegExp';


function Registration() {
    /* 회원가입 초기값 -1 로 세팅 */
    const [email, setEmail] = useState(-1);
    const [name, setName] = useState(-1);
    const [nickName, setNickname] = useState(-1);
    const [password, setPassword] = useState(-1);
    const [passwordCheck, setPasswordCheck] = useState(-1);

    /* 회원가입 유효성 검증 */
    const [isValidEmail, setEmailValidity] = useState(false);
    const [isNameFillt, setNameValidity] = useState(false);
    const [isValidNickname, setNicknameValidity] = useState(false);
    const [isValidPassword, setPasswordValidity] = useState(false);
    const [isValidPasswordCheck, setPasswordCheckValidity] = useState(false);

    useEffect(() => {
        comparePasswordAndPasswordCheck();
    }, [password, passwordCheck]) // 배열에 담긴 것들이 effected 될 때만 useEffect가 작동한다.

    /* 
     * 비밀번호 확인 유효성 검증 함수
     * useEffect로 password, passwordCheck가 바뀔 때 두 변수를 비교하여 boolean값을 set한다.
     */
    const comparePasswordAndPasswordCheck = () => {
        password === passwordCheck ? setPasswordCheckValidity(true) :
            setPasswordCheckValidity(false);
    }

    /* form input 이 변경될 때마다 hook을 set하는 리스너 함수 */
    const handleFromChange = (e) => {
        switch (e.target.name) {
            case "email":
                if (checkEmailValidity(e.target.value)) {
                    setEmailValidity(true);
                    setEmail(e.target.value);
                } else {
                    setEmailValidity(false);
                    setEmail("");
                }
                break;
            case "name":
                if (e.target.value === "") {
                    setNameValidity(false);
                } else {
                    setNameValidity(true);
                }
                setName(e.target.value);
                break;
            case "nickName":
                if (checkNicknameValidity(e.target.value)) {
                    setNicknameValidity(true);
                } else {
                    setNicknameValidity(false);
                }
                setNickname(e.target.value);
                break;
            case "password":
                if (checkPasswordValidity(e.target.value)) {
                    setPasswordValidity(true);
                } else {
                    setPasswordValidity(false);
                }
                setPassword(e.target.value);
                break;
            case "passwordCheck":
                setPasswordCheck(e.target.value);
                break;
        }
    }

    /* 회원가입의 모든 boolean값이 true인지 검증 */
    const finalValidationCheck = () => {
        return isValidEmail && isNameFillt && isValidNickname && isValidPassword && isValidPasswordCheck;
    }


    /* e는 event를 뜻하고, 대상은 e.target.'대상'으로 선택 */
    const submitClick = (e) => {
        e.preventDefault();
        if (!finalValidationCheck()) {
            alert("검증 안됨");
            return;
        }

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
            alert("[ERROR] 서버와의 통신에 실패하였습니다");
        }
    }

    return (
        <div className="registration_div">
            <div>
                <span>회원가입</span>
            </div>
            <form className="registration_form" onSubmit={submitClick}>
                <input className="registration_input" name="email" placeholder="이메일 주소" onChange={handleFromChange} />
                {email !== -1 ? (isValidEmail ? (
                    <div>
                        <span>사용가능한 Email 입니다</span>
                    </div>
                ) : (
                    <div>
                        <span className='inValidForm'>잘못된 Email 양식입니다</span>
                    </div>
                )) : null}
                <input id="name" className="registration_input" name="name" placeholder="성명" onChange={handleFromChange} />
                <input className="registration_input" name="nickName" placeholder="닉네임" onChange={handleFromChange} />
                {nickName !== -1 ? (isValidNickname ? (
                    <div>
                        <span>사용가능한 닉네임입니다</span>
                    </div>
                ) : (
                    <div>
                        <span className='inValidForm'>닉네임은 1자 이상 8자 이하로 입력하셔야 합니다</span>
                    </div>
                )) : null}
                <input className="registration_input" name="password" type="password" placeholder="비밀번호" onChange={handleFromChange} />
                {password !== -1 ? (isValidPassword ? (
                    <div>
                        <span>사용가능한 비밀번호입니다</span>
                    </div>
                ) : (
                    <div>
                        <span className='inValidForm'> 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요</span>
                    </div>
                )) : null}
                <input className="registration_input" name="passwordCheck" type="password" placeholder="비밀번호 확인" onChange={handleFromChange} />
                {passwordCheck !== -1 ? (isValidPasswordCheck ? (
                    <div>
                        <span>비밀번호가 일치합니다</span>
                    </div>
                ) : (
                    <div>
                        <span className='inValidForm'>비밀번호가 일치하지 않습니다</span>
                    </div>
                )) : null}
                <div>
                    <button className="registration_submit" type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;

