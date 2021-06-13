import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Style.css";
import "../CSS/NavigationBar.css";
import logoutRequestAxios from "./Login/LogoutRequestAxios.jsx";
import apartment_icon from "../img/apartment_icon.ico";
import { useCookies } from "react-cookie";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

//패키지 추가 후 로컬 실행하려면 yarn 해줘야함
function NavigationBar() {
  /* 리액트 전역 쿠키로 메뉴를 변경한다 */
  const [cookies, setCookie, removeCookie] = useCookies(["loginDone"]);
  const [isLoginDone, setLoginStatus] = useState(false);

  if (cookies.loginDone != undefined && cookies.loginDone && !isLoginDone) {
    setLoginStatus(true);
  }

  /* 로그아웃 시 confirm으로 질의 */
  const handleOnClick = (e) => {
    if (window.confirm("정말로 로그아웃 하시겠습니까?")) {
      logoutRequestAxios((isLogoutSuccess) => {
        if (isLogoutSuccess) {
          removeCookie("loginDone", { path: "/" });
          window.location.replace("/"); // 로그아웃 시 새로고침
        } else {
          alert("[ERROR] 로그아웃에 문제가 발생하였습니다.");
        }
      });
    }
  };
  return (
    <div className="navBody">
      <img
        className="iconImage"
        src={apartment_icon}
        alt="apartmentImage"
      ></img>
      <span className="homeTitle">
        <Link to="/">ZIP GAP</Link>
      </span>
      <div className="navBlock">
        {isLoginDone ? (
          <span>
            <span>집값에 오신 것을 환영합니당! </span>
            <div className="navClickableMenu">
              <Link to="/Cart">장바구니</Link>
            </div>
            <div className="navClickableMenu" onClick={handleOnClick}>
              로그아웃
            </div>
            <Link to="/MyPage" className="navClickableMenu">
              <PersonOutlineIcon fontSize="large" color="action" />
            </Link>
          </span>
        ) : (
          <span>
            <div className="navElement">
              <Link to="/Login">로그인</Link>
            </div>
            <div className="navElement"></div>
            <div className="navElement">
              <Link to="/Registration">회원가입</Link>
            </div>
          </span>
        )}

        <span className="navElement">
          <Link to="/FreeBoard">자유게시판</Link>
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
