import React, { useRef, useState } from 'react';
import loginRequestAxios from './LoginRequestAxios'
import { useCookies } from 'react-cookie';
import '../../CSS/Login.css'

function Login() {
  /* 초기 입력값 null 로 설정 */
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  /* 아이디, 비밀번호 체크 */
  const [isLoginInfoValid, setLoginInfoValidation] = useState(null);

  /* 로그인 시 redirec를 위한 boolean */
  const [shouldRedirect, setRedirect] = useState(false);

  /* input ref 변수 선언 */
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  /* 로그인 성공 시 설정할 react-cookie */
  const [cookies, setCookie] = useCookies(['loginDone']);
  if (cookies.loginDone !== undefined) {
    window.location.replace("/"); // 이미 로그인 한 상태면 홈 화면으로 돌아간다.
    return ( //아무것도 return하지 않는다.
      <div></div>
    )
  }

  const handleOnChange = (e) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  /* 로그인 최종 유효성 검증, false면 focue를 준다 */
  const finalValidationCheck = () => {
    console.log("유효성 검증");
    if (id === null || id.length === 0) {
      setId("");
      return idRef.current.focus();
    } else if (password === null || password.length === 0) {
      setPassword("");
      return passwordRef.current.focus();
    }
    return true;
  }
  console.log("setCookie 세팅 전 " + cookies.isLogin);

  const handleOnSubmit = (e) => {
    e.preventDefault(); // 리다이렉트 막음
    console.log("핸들 온서밉");
    if (!finalValidationCheck()) {
      return;
    }

    /* 로그인 데이터 객체 */
    const formData = {
      id: id,
      password: password
    }

    /* 회원가입 로직 함수 호출 --> 비동기이므로 콜백으로 응답을 받는다 */
    loginRequestAxios(formData, (isLoginSuccess) => {
      console.log("로그인 콜백 결과 : " + isLoginSuccess);
      setRedirect(isLoginSuccess); // 콜백결과(true)로 redirect를 세팅한다 -> setState

      /* 로그인이 성공하였을 경우 전역 쿠키(react-cookie)값을 true로 설정한다. */
      if (isLoginSuccess) {
        setCookie('loginDone', true, { path: '/' }); // path를 '/'로 하면 전역 쿠키로 기능함
      }
      setLoginInfoValidation(isLoginSuccess);
    });
  }
  /* 로그인 완료 시 Home화면으로 redirect */
  if (shouldRedirect) {
    // return <Redirect to="/" />
    window.location.replace("/") // 로그인 완료 시 첫 페이지로 새로고침한다
  }
  return (
    <div className="login_div">
      <div className="internalLoginForm_div">
        <h1> Log in </h1>
        <form className="login_form" onSubmit={handleOnSubmit}>
          <input className="login_input" name="id" placeholder="아이디(Email)" ref={idRef} onChange={handleOnChange} />
          {id !== null ? (
            id.length === 0 ? (
              <div>
                <span className="inValidForm"> * 아이디를 입력해주세요 </span>
              </div>
            ) : (null)
          ) : null}
          <input className="login_input" type="password" name="password" placeholder="비밀번호" ref={passwordRef} onChange={handleOnChange} />
          {password !== null ? (
            password.length === 0 ? (
              <div>
                <span className="inValidForm"> * 비밀번호를 입력해주세요 </span>
              </div>
            ) : (null)
          ) : null}
          <button className="login_submit" type="submit">로그인</button>
          {isLoginInfoValid !== null && !isLoginInfoValid ?
            (
              <p className="inValidForm"> * 아이디 또는 비밀번호를 확인해주세요 </p>
            )
            :
            (null)}
        </form>
      </div>
    </div>
  );
}

export default Login;
