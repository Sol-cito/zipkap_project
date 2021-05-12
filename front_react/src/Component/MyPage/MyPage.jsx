import React, { useEffect, useRef, useState } from 'react';
import '../../CSS/MyPage.css'
import { useCookies } from 'react-cookie';
import withdrawalRequestAxios from './WithdrawalRequestAxios';


function MyPage() {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);
    if (cookies.loginDone == undefined) {
        window.location.replace("/"); // 로그인 한 상태 아니면 메인화면으로 리다이렉트
        return ( //아무것도 return하지 않는다.
            <div></div>
        )
    }

    /* 회원탈퇴 메소드 */
    const handleWithdrawal = (e) => {
        e.preventDefault(); // 리다이렉트 막음
        /* 회원탈퇴 함수 호출 --> 비동기이므로 콜백으로 응답을 받는다 */
        alert("회원 탈퇴 ㄱㄱ");
        withdrawalRequestAxios((isWithdrawalSuccess) => {
            console.log("회원탈퇴 콜백 결과 : " + isWithdrawalSuccess);
            /*  회원탈퇴가 이루어졌으면 쿠키를 삭제하고 메인화면으로 간다. */
            if (isWithdrawalSuccess) {
                removeCookie('loginDone', { path: '/' });
                window.location.replace("/"); // 로그아웃 시 새로고침
            }
        });
    }

    /* 비밀번호 변경 메소드 */
    const handlePasswordChange = (e) => {
        e.preventDefault(); // 리다이렉트 막음
        alert("비번변경");
    }

    return (
        <div className="mypage_div">
            <div className="mypage_internal_div">
                <div className="mypage_title_div">
                    <p className="mypage_p">기본정보</p>
                    <span className="mypage_span_1">회원님의 기본정보는 아래와 같습니다.</span>
                </div>
                <hr className="mypage_hr" />
                <div className="mypage_input_div">
                    <p className="mypage_p_2">이메일</p>
                    <input className="mypage_input" placeholder="테스트 이메일"></input>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_p_2">이름</p>
                    <input className="mypage_input" placeholder="테스트 이름"></input>
                    <span> 변경하기 </span>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_p_2">닉네임</p>
                    <input className="mypage_input" placeholder="테스트 닉네임"></input>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_p_clickable" onClick={handlePasswordChange} >비밀번호변경</p>
                </div>
                <div className="mypage_input_div" onClick={handleWithdrawal}>
                    <p className="mypage_p_clickable">회원 탈퇴</p>
                </div>
            </div>
        </div>
    )
}

export default MyPage;

