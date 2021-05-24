import React from 'react';
import '../../CSS/PasswordChange.css'


function Withdrawal() {
    return (
        <div className="mypage_div">
            <div className="mypage_internal_div">
                <div className="mypage_title_div">
                    <p className="mypage_p">회원 탈퇴</p>
                    <span className="mypage_span_1">회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.</span>
                </div>
                <hr className="mypage_hr" />
                <div className="mypage_input_div">
                    <span className="mypage_span_1">사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</span>
                </div>
                <div className="mypage_input_div">
                    <span className="mypage_span_1">탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니 신중하게 선택하시기 바랍니다.</span>
                </div>
                <div className="mypage_input_div">
                    <span className="mypage_span_1">게시판형 서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.</span>
                </div>
                <div className="mypage_input_div">
                    <span className="mypage_span_1">게시글 및 댓글은 탈퇴 시 자동 삭제되지 않고 그대로 남아 있습니다.
                    삭제를 원하는 게시글이 있다면 반드시 탈퇴 전 비공개 처리하거나 삭제하시기 바랍니다.
                    탈퇴 후에는 회원정보가 삭제되어 본인 여부를 확인할 수 있는 방법이 없어, 게시글을 임의로 삭제해드릴 수 없습니다.</span>
                </div>
            </div>
        </div>
    )
}

export default Withdrawal;
