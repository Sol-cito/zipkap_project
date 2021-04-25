import React, { useEffect, useRef, useState } from 'react';
import loginRequestAxios from './LoginRequestAxios'
import '../../CSS/Login.css'

function Login() {
  /* 초기 입력값 null 로 설정 */
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  /* input ref 변수 선언 */
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const handleOnChange = (e) => {
    if (e.target.name == "id") {
      setId(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  }

  /* 로그인 최종 유효성 검증, false면 focue를 준다 */
  const finalValidationCheck = () => {
    console.log("유효성 검증");
    if (id === null || id.length == 0) {
      setId("");
      return idRef.current.focus();
    } else if (password === null || password.length == 0) {
      setPassword("");
      return passwordRef.current.focus();
    }
    return true;
  }

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
    loginRequestAxios(formData, (response) => {
      console.log("로그인 콜백 결과 : " + response);
      // setRedirect(response); // 콜백결과(true)로 redirect를 세팅한다 -> setState
    });
  }

  return (
    <div className="login_div">
      <h1> 로그인</h1>
      <form className="login_form" onSubmit={handleOnSubmit}>
        <input className="login_input" name="id" placeholder="아이디(Email)" ref={idRef} onChange={handleOnChange} />
        {id !== null ? (
          id.length == 0 ? (
            <div>
              <span className="inValidForm"> * 아이디를 입력해주세요 </span>
            </div>
          ) : (null)
        ) : null}
        <input className="login_input" type="password" name="password" placeholder="비밀번호" ref={passwordRef} onChange={handleOnChange} />
        {password !== null ? (
          password.length == 0 ? (
            <div>
              <span className="inValidForm"> * 비밀번호를 입력해주세요 </span>
            </div>
          ) : (null)
        ) : null}
        <div>
          <button className="login_submit" type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
