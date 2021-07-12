import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import '../../CSS/PasswordChange.css'
import { Button } from '@material-ui/core';
/* 회원가입 검증 로직에서 password 유효성 검증 함수 import */
import { checkPasswordValidity } from '../Registration/RegistrationRegExp';
import { checkCurPasswordRequestAxios, changePasswordRequestAxios } from "./PasswordChangeRequestAxios";

function PasswordChange() {
    const [curPassword, setCurPW] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordcheck, setnewPasswordcheck] = useState("");
    const [cookies] = useCookies(['loginDone']);
    
    if (cookies.loginDone === undefined) {
        window.location.replace("/"); // 로그인 한 상태 아니면 메인화면으로 리다이렉트
        return ( //아무것도 return하지 않는다.
            <div></div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /* 세 값 중 하나라도 입력되지 않았을 때 */
        if (curPassword.length === 0 || newPassword.length === 0 || newPasswordcheck.length === 0) {
            alert("입력되지 않은 값이 있습니다.");
            return;
        }
        /* 입력 비밀번호의 값이 같지 않을 때 */
        if (newPassword !== newPasswordcheck) {
            alert("두 비밀번호가 일치하는지 확인하세요.");
            return;
        }
        if (!checkPasswordValidity(newPassword)) {
            alert("8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.");
            return;
        }
        checkCurPasswordRequestAxios(curPassword, (isCurPWValid) => {
            if (!isCurPWValid) {
                alert("현재 비밀번호를 다시 확인하세요.")
                return;
            }
            changePasswordRequestAxios(newPassword, callback => {
                if (callback) {
                    alert("비밀번호가 정상적으로 수정되었습니다.");
                    window.location.replace("/"); // 로그아웃 시 새로고침
                }
            });
        });
    };

    const handleFormChange = (e) => {
        switch (e.target.name) {
            case "curPW":
                setCurPW(e.target.value);
                break;
            case "newPassword":
                setNewPassword(e.target.value);
                break;
            case "newPasswordCheck":
                setnewPasswordcheck(e.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <div className="passwordChange_div">
            <div className="internalPasswordChange_div">
                <div className="mypage_title_div">
                    <p className="mypage_p">비밀번호 변경</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="passwordChange_input_div">
                        <p className="mypage_p_2">이전 비밀번호</p>
                        <input className="passwordChange_input" name="curPW" type="password" onChange={handleFormChange}></input>
                    </div>
                    <div className="passwordChange_input_div">
                        <p className="mypage_p_2">새 비밀번호</p>
                        <input className="passwordChange_input" name="newPassword" type="password" onChange={handleFormChange}></input>
                    </div>
                    <div className="passwordChange_input_div">
                        <p className="mypage_p_2">새 비밀번호 확인</p>
                        <input className="passwordChange_input" name="newPasswordCheck" type="password" onChange={handleFormChange}></input>
                    </div>
                    <div className="passwordChange_button_div">
                        <Button variant="contained" color="primary" type="submit"> 비밀번호 변경 </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordChange;
