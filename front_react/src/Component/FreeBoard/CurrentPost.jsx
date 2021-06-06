import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import CurrentPostRequestAxios from './CurrentPostRequestAxios';
import { convertNumberIntoDateFormatWithDetail } from './convertNumberIntoDateFormat.js'


const CurrentPost = ({ match }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);

    const [post, setPost] = useState(null);

    /* 첫 페이지 로딩 시 post 메소드로 게시글을 불러온다 */
    useEffect(async () => {
        CurrentPostRequestAxios(match.params.post_seq, (response => {
            if (response !== false) {
                setPost(response);
            }
        }));
    }, []);

    console.log("데이터 받았다 : " + post);

    return (
        <div className="mypage_div">
            <div className="freeBoard_Table_div">
                {post !== null ? (
                    <div>
                        <p>제목 : {post.title}</p>
                        <p>글쓴이 : {post.author}</p>
                        <p>날짜 : {convertNumberIntoDateFormatWithDetail(post.date)}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default CurrentPost;

