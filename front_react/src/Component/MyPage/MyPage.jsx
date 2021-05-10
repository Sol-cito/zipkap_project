import React, { useEffect, useRef, useState } from 'react';
import '../../CSS/MyPage.css'
import { useCookies } from 'react-cookie';


function MyPage() {
    const [cookies] = useCookies(['loginDone']);
    if (cookies.loginDone == undefined) {
        window.location.replace("/"); // 로그인 한 상태 아니면 메인화면으로 리다이렉트
        return( //아무것도 return하지 않는다.
            <div></div>
        )
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
                    <p className="mypage_span_2">이메일</p>
                    <input className="mypage_input" placeholder="테스트 이메일"></input>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_span_2">이름</p>
                    <input className="mypage_input" placeholder="테스트 이름"></input>
                    <span> 변경하기 </span>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_span_2">닉네임</p>
                    <input className="mypage_input" placeholder="테스트 닉네임"></input>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_span_2">비밀번호변경</p>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_span_2">회원 탈퇴</p>
                </div>
            </div>
        </div>
    )
}

export default MyPage;

