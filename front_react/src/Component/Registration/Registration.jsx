import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import { useForm } from 'react-hook-form'; // form 검증을 도와주는 라이브러리
import '../../CSS/Registration.css'
import { checkEmailValidity, checkNicknameValidity, checkPasswordValidity } from './RegistrationRegExp';
import checkEmailAndNickNameExistence from './CheckEmailAndNickNameAxios.jsx';
import registrationRequestAxios from './RegistrationRequestAxios.jsx'

function Registration() {
    /* 회원가입 초기값 null 로 세팅 */
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [nickName, setNickname] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(null);

    /* 회원가입 유효성 검증  */
    const [isValidEmail, setEmailValidity] = useState(false);
    const [isNameFillt, setNameValidity] = useState(false);
    const [isValidNickname, setNicknameValidity] = useState(false);
    const [isValidPassword, setPasswordValidity] = useState(false);
    const [isValidPasswordCheck, setPasswordCheckValidity] = useState(false);

    /* 이메일 및 닉네임 중복여부 검증 */
    const [isDuplicateEmail, setEmailDuplication] = useState(false);
    const [isDuplicateNickname, setNicknameDuplication] = useState(false);

    /* 회원가입 완료 시 redirec를 위한 boolean */
    const [shouldRedirect, setRedirect] = useState(false);

    /* 비밀번호 및 비밀번호 확인 관련 메시지를 dynamic하게 보여주기 위해 설정 */
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

    /* input에서 onBlur(리액트에서는 onFocusOut 대신 onBlur를 쓴다)할 때 중복검사를 한다 */
    const handleOnBlur = (e) => {
        console.log("haneldEmailOnBlur");

        /* 데이터 검증을 위해 전송할 JSON 객체 */
        const formData = {
            email: email,
            name: name,
            nickName: nickName,
            password: password
        }

        switch (e.target.name) {
            case "email":
                if (email == null) {
                    return;
                }
                checkEmailAndNickNameExistence("email", formData, (response) => {
                    setEmailDuplication(response);
                })
                break;
            case "nickName":
                if (nickName == null) {
                    return;
                }
                checkEmailAndNickNameExistence("nickName", formData, (response) => {
                    setNicknameDuplication(response);
                })
                break;
            default:
                break;

        }
    }


    /* form input 이 변경될 때마다 hook을 set하는 리스너 함수 */
    const handleFromChange = (e) => {
        console.log("핸들 폼 체인지");
        switch (e.target.name) {
            case "email":
                if (checkEmailValidity(e.target.value)) {
                    setEmailValidity(true);
                } else {
                    setEmailValidity(false);
                }
                setEmail(e.target.value);
                break;
            case "name":
                if (e.target.value.length != 0) {
                    setNameValidity(true);
                } else {
                    setNameValidity(false);
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
            default:
                break;
        }
    }

    /* 최종 유효성 검증 후 focus를 줄 대상의 reference (각 input에 ref로 달려있다) */
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const nickNameRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordCheckRef = useRef(null);

    /* 회원가입의 모든 boolean값이 true인지 최종 유효성 검증, false면 focue를 준다 */
    const finalValidationCheck = () => {
        if (!isValidEmail || isDuplicateEmail) {
            return emailRef.current.focus();
        } else if (!isNameFillt) {
            return nameRef.current.focus();
        } else if (!isValidNickname || isDuplicateNickname) {
            return nickNameRef.current.focus();
        } else if (!isValidPassword) {
            return passwordRef.current.focus();
        } else if (!isValidPasswordCheck) {
            return passwordCheckRef.current.focus();
        }
        return true;
    }


    /* e는 event를 뜻하고, 대상은 e.target.'대상'으로 선택 */
    const submitClick = (e) => {
        e.preventDefault();
        if (!finalValidationCheck()) {
            return;
        }

        /* 훅 데이터를 묶어서 전송할 객체 */
        const formData = {
            email: email,
            name: name,
            nickName: nickName,
            password: password
        }

        /* 회원가입 로직 함수 호출 --> 비동기이므로 콜백으로 응답을 받는다 */
        registrationRequestAxios(formData, (response) => {
            console.log("회원가입 콜백 결과 : " + response);
            setRedirect(response); // 콜백결과(true)로 redirect를 세팅한다 -> setState
        });
    }
    /* 회원가입 완료 시 Home화면으로 redirect */
    if (shouldRedirect) {
        return <Redirect to="/RegistrationSuccess" />
    }
    return (
        <div className="registration_div">
            <div className="internalForm_div">
                <div>
                    <h1>ZIP GAP</h1>
                    <p className="subtitle">전국의 집값 정보를 알고 싶으시면 가입하세요.</p>
                </div>
                <form className="registration_form" onSubmit={submitClick}>
                    <input className="registration_input" name="email" placeholder="이메일 주소" ref={emailRef} onChange={handleFromChange} onBlur={handleOnBlur} />
                    {email !== null ? (isValidEmail ? (
                        isDuplicateEmail ? (
                            <div>
                                <span className="inValidForm">* 중복 Email 입니다</span>
                            </div>
                        ) : (
                            <div>
                                <span className="validForm">사용가능한 Email 입니다</span>
                            </div>
                        )
                    ) : (
                        <div>
                            <span className='inValidForm'>* 잘못된 Email 양식입니다</span>
                        </div>
                    )) : null}
                    <input id="name" className="registration_input" name="name" placeholder="성명" ref={nameRef} onChange={handleFromChange} />
                    {name !== null ? (isNameFillt ? (
                        <div>
                            <span className="validForm">멋진 이름이네요!</span>
                        </div>
                    ) : (
                        <div>
                            <span className='inValidForm'> * 이름을 입력해주세요</span>
                        </div>
                    )) : null}
                    <input className="registration_input" name="nickName" placeholder="닉네임" ref={nickNameRef} onChange={handleFromChange} onBlur={handleOnBlur} />
                    {nickName !== null ? (isValidNickname ?
                        isDuplicateNickname ? (
                            <div>
                                <span className="inValidForm">* 중복 닉네임 입니다</span>
                            </div>
                        ) : (
                            <div>
                                <span className="validForm">사용가능한 닉네임입니다</span>
                            </div>
                        ) : (
                            <div>
                                <span className='inValidForm'>* 닉네임은 1자 이상 8자 이하로 입력하셔야 합니다</span>
                            </div>
                        )) : null}
                    <input className="registration_input" name="password" type="password" placeholder="비밀번호" ref={passwordRef} onChange={handleFromChange} />
                    {password !== null ? (isValidPassword ? (
                        <div>
                            <span className="validForm">사용가능한 비밀번호입니다</span>
                        </div>
                    ) : (
                        <div>
                            <span className='inValidForm'> * 8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요</span>
                        </div>
                    )) : null}
                    <input className="registration_input" name="passwordCheck" type="password" placeholder="비밀번호 확인" ref={passwordCheckRef} onChange={handleFromChange} />
                    {passwordCheck !== null ? (isValidPasswordCheck ? (
                        <div>
                            <span className="validForm">비밀번호가 일치합니다</span>
                        </div>
                    ) : (
                        <div>
                            <span className='inValidForm'>* 비밀번호가 일치하지 않습니다</span>
                        </div>
                    )) : null}
                    <div>
                        <button className="registration_submit" type="submit">가입하기</button>
                        <div className="policy_div">
                            <p className="policyNotice">가입하면 Zipgap의 <b>약관, 데이터 정책 및 쿠키정책</b>에 동의하게 됩니다.</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;

