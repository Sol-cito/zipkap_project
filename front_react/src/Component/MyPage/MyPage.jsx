import React, { useEffect, useState } from 'react';
import '../../CSS/MyPage.css'
import { useCookies } from 'react-cookie';
import BasicInfoRequestAxios from './BasicInfoRequestAxios';
import ProfileChangeAxios from './ProfileChangeAxios';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";


function MyPage() {

    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [nickName, setNickName] = useState(null);

    const [prevName, setPrevName] = useState('false');
    const [prevNickName, setPrevNickName] = useState('false');

    useEffect(() => {
        BasicInfoRequestAxios((response) => {
            setEmail(response.data.email);
            setName(response.data.name);
            setNickName(response.data.nickName);

            setPrevName(response.data.name);
            setPrevNickName(response.data.nickName);
        });
    }, []);

    const [cookies] = useCookies(['loginDone']);
    if (cookies.loginDone === undefined) {
        window.location.replace("/"); // 로그인 한 상태 아니면 메인화면으로 리다이렉트
        return ( //아무것도 return하지 않는다.
            <div></div>
        )
    }

    /* 이름 변경 메소드 */
    const handleChangeName = (e) => {
        e.preventDefault(); // 리다이렉트 막음
        setName(e.target.value);
    }

    /* 닉네임 변경 메소드 */
    const handleChangeNickName = (e) => {
        e.preventDefault(); // 리다이렉트 막음
        setNickName(e.target.value);
    }

    const handleProfileChangeOnClick = (e) => {
        const profileInfo = {
            email,
            name,
            nickName
        }
        ProfileChangeAxios(profileInfo, (res) => {
            if (res) {
                alert("프로필 정보가 수정되었습니다.");
                window.location.replace("/MyPage");
            }
        })
    }

    return (
        <div className="mypage_div">
            <div className="mypage_internal_div">
                <div className="mypage_title_div">
                    <p className="mypage_p">프로필 편집</p>
                    <span className="mypage_span_1">변경할 프로필을 입력하고 수정 버튼을 누르세요</span>
                </div>
                <hr className="mypage_hr" />
                <div className="mypage_input_div">
                    <p className="mypage_p_2">이메일</p>
                    <input className="mypage_input" placeholder={email} disabled></input>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_p_2">이름</p>
                    <input className="mypage_input" value={name} onChange={handleChangeName}></input>
                </div>
                <div className="mypage_input_div">
                    <p className="mypage_p_2">닉네임</p>
                    <input className="mypage_input" value={nickName} onChange={handleChangeNickName}></input>
                </div>
                <div className="mypage_input_div">
                    <Link to='/MyPage/PasswordChange' className="mypage_Link">비밀번호 변경</Link>
                </div>
                <div className="mypage_input_div">
                    <Link to='/MyPage/Withdrawal' className="mypage_Link">회원 탈퇴</Link>
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={name == prevName && nickName == prevNickName}
                        onClick={handleProfileChangeOnClick}
                    >
                        수정
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyPage;

