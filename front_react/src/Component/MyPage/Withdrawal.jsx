import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import '../../CSS/PasswordChange.css'
import { Button } from '@material-ui/core';
import withdrawalRequestAxios from './WithdrawalRequestAxios';


function Withdrawal() {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);
    const [agreement, setAgreement] = useState(false);
    
    const handleCheckboxClick = () => {
        setAgreement(!agreement);
    }

    /* 버튼 누를 시 회원탈퇴 axios 컴포넌트 호출 */
    const handleWithdrawal = () => {
        if (agreement) {
            withdrawalRequestAxios((isWithdrawalSuccess) => {
                /*  회원탈퇴가 이루어졌으면 쿠키를 삭제하고 메인화면으로 간다. */
                alert("회원 탈퇴가 정상적으로 완료되었습니다.");
                if (isWithdrawalSuccess) {
                    removeCookie('loginDone', { path: '/' });
                    window.location.replace("/"); // 로그아웃 시 새로고침
                }
            });
        } else {
            alert("탈퇴 안내를 확인하고 동의해주세요");
        }
    }

    return (
        <div className="mypage_div">
            <div className="mypage_internal_div">
                <div className="mypage_title_div">
                    <p className="mypage_p">회원 탈퇴</p>
                    <span className="mypage_span_1">회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.</span>
                </div>
                <hr className="mypage_hr" />
                <div className="mypage_title_div">
                    <span className="mypage_span_1">사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</span>
                </div>
                <div className="mypage_title_div">
                    <span className="mypage_span_1">탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니 신중하게 선택하시기 바랍니다.</span>
                </div>
                <div className="mypage_title_div">
                    <span className="mypage_span_1">게시판형 서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.</span>
                </div>
                <div className="mypage_title_div">
                    <p className="mypage_span_1">게시글 및 댓글은 탈퇴 시 자동 삭제되지 않고 그대로 남아 있습니다.</p>
                    <p className="mypage_span_1">삭제를 원하는 게시글이 있다면 반드시 탈퇴 전 비공개 처리하거나 삭제하시기 바랍니다.</p>
                    <p className="mypage_span_1">탈퇴 후에는 회원정보가 삭제되어 본인 여부를 확인할 수 있는 방법이 없어, 게시글을 임의로 삭제해드릴 수 없습니다.</p>
                </div>
                <div className="mypage_title_div">
                    <input type="checkbox" className="withdraw_Checkbox" onClick={handleCheckboxClick} />
                    <span className="withdraw_agreement">안내 사항을 모두 확인하였으며, 이에 동의합니다.</span>
                </div>
                <br />
                <div>
                    <Button variant="contained" color="primary" onClick={handleWithdrawal}> 제출 </Button>
                </div>
            </div>
        </div >
    )
}

export default Withdrawal;
