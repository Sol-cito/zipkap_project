import React from 'react';
import '../../CSS/PasswordChange.css'
import { Button } from '@material-ui/core'; 


function PasswordChange() {
    return (
        <div className="passwordChange_div">
            <div className="internalPasswordChange_div">
                <div className="mypage_title_div">
                    <p className="mypage_p">비밀번호 변경</p>
                </div>
                <div className="passwordChange_input_div">
                    <p className="mypage_p_2">이전 비밀번호</p>
                    <input className="passwordChange_input" type="password"></input>
                </div>
                <div className="passwordChange_input_div">
                    <p className="mypage_p_2">새 비밀번호</p>
                    <input className="passwordChange_input" type="password"></input>
                </div>
                <div className="passwordChange_input_div">
                    <p className="mypage_p_2">새 비밀번호 확인</p>
                    <input className="passwordChange_input" type="password"></input>
                </div>
                <div className="passwordChange_button_div">
                    <Button variant="contained" color="primary"> 비밀번호 변경 </Button>
                </div>
            </div>
        </div>
    )
}

export default PasswordChange;
