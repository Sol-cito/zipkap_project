import React, { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
// import { useForm } from 'react-hook-form'; // form 검증을 도와주는 라이브러리
import axios from "axios";
import {
  checkEmailValidity,
  checkNicknameValidity,
  checkPasswordValidity,
} from "./RegistrationRegExp";
import "./Registration.css";

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

  /* 회원가입 완료 시 redirec를 위한 boolean */
  const [shouldRedirect, setRedirect] = useState(false);

  /* 비밀번호 및 비밀번호 확인 관련 메시지를 dynamic하게 보여주기 위해 설정 */
  useEffect(() => {
    comparePasswordAndPasswordCheck();
  }, [password, passwordCheck]); // 배열에 담긴 것들이 effected 될 때만 useEffect가 작동한다.

  /*
   * 비밀번호 확인 유효성 검증 함수
   * useEffect로 password, passwordCheck가 바뀔 때 두 변수를 비교하여 boolean값을 set한다.
   */
  const comparePasswordAndPasswordCheck = () => {
    password === passwordCheck
      ? setPasswordCheckValidity(true)
      : setPasswordCheckValidity(false);
  };

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
    }
  };

  /* 최종 유효성 검증 후 focus를 줄 대상의 reference (각 input에 ref로 달려있다) */
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const nickNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);

  /* 회원가입의 모든 boolean값이 true인지 최종 유효성 검증, false면 focue를 준다 */
  const finalValidationCheck = () => {
    if (!isValidEmail) {
      return emailRef.current.focus();
    } else if (!isNameFillt) {
      return nameRef.current.focus();
    } else if (!isValidNickname) {
      return nickNameRef.current.focus();
    } else if (!isValidPassword) {
      return passwordRef.current.focus();
    } else if (!isValidPasswordCheck) {
      return passwordCheckRef.current.focus();
    }
    return true;
  };

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
      password: password,
    };

    console.log("[REACT] 회원가입 formData : " + JSON.stringify(formData));

    axios({
      url: "/api/user/registration",
      method: "post",
      headers: { "Content-Type": `application/json ; charset=utf-8` }, // data 방식을 json으로 세팅
      // json으로 변환하여 전송
      data: JSON.stringify(formData),
    })
      .then(function (response) {
        alert("회원가입 성공");
        setRedirect(true);
      })
      .catch(function (error) {
        if (error.response) {
          alert(
            "[ERROR] 서버의 응답에 문제가 있습니다. \n" +
              " - 상태코드 : " +
              error.response.status
          );
        } else if (error.request) {
          alert("[ERROR] 서버가 요청에 응답하지 않습니다.");
        } else {
          alert("[ERROR] 요청 설정 중에 문제가 발생하였습니다.");
        }
      });
  };
  /* 회원가입 완료 시 Home화면으로 redirect */
  if (shouldRedirect) {
    return <Redirect to="/RegistrationSuccess" />;
  }
  return (
    <div className="registration_div">
      <div>
        <h1>회원가입</h1>
      </div>
      <form className="registration_form" onSubmit={submitClick}>
        <input
          className="registration_input"
          name="email"
          placeholder="이메일 주소"
          ref={emailRef}
          onChange={handleFromChange}
        />
        {email !== null ? (
          isValidEmail ? (
            <div>
              <span>사용가능한 Email 입니다</span>
            </div>
          ) : (
            <div>
              <span className="inValidForm">* 잘못된 Email 양식입니다</span>
            </div>
          )
        ) : null}
        <input
          id="name"
          className="registration_input"
          name="name"
          placeholder="성명"
          ref={nameRef}
          onChange={handleFromChange}
        />
        {name !== null ? (
          isNameFillt ? (
            <div>
              <span>멋진 이름이네요!</span>
            </div>
          ) : (
            <div>
              <span className="inValidForm"> * 이름을 입력해주세요</span>
            </div>
          )
        ) : null}
        <input
          className="registration_input"
          name="nickName"
          placeholder="닉네임"
          ref={nickNameRef}
          onChange={handleFromChange}
        />
        {nickName !== null ? (
          isValidNickname ? (
            <div>
              <span>사용가능한 닉네임입니다</span>
            </div>
          ) : (
            <div>
              <span className="inValidForm">
                * 닉네임은 1자 이상 8자 이하로 입력하셔야 합니다
              </span>
            </div>
          )
        ) : null}
        <input
          className="registration_input"
          name="password"
          type="password"
          placeholder="비밀번호"
          ref={passwordRef}
          onChange={handleFromChange}
        />
        {password !== null ? (
          isValidPassword ? (
            <div>
              <span>사용가능한 비밀번호입니다</span>
            </div>
          ) : (
            <div>
              <span className="inValidForm">
                {" "}
                * 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요
              </span>
            </div>
          )
        ) : null}
        <input
          className="registration_input"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호 확인"
          ref={passwordCheckRef}
          onChange={handleFromChange}
        />
        {passwordCheck !== null ? (
          isValidPasswordCheck ? (
            <div>
              <span>비밀번호가 일치합니다</span>
            </div>
          ) : (
            <div>
              <span className="inValidForm">
                * 비밀번호가 일치하지 않습니다
              </span>
            </div>
          )
        ) : null}
        <div>
          <button className="registration_submit" type="submit">
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
