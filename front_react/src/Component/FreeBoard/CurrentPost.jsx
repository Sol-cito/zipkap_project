import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import CurrentPostRequestAxios from './CurrentPostRequestAxios';
import { convertNumberIntoDateFormatWithDetail } from './convertNumberIntoDateFormat.js'
import ReactLoading from 'react-loading';


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
    }, [post]);

    console.log("데이터 받았다 : " + post);

    return (
        <div className="mypage_div">
            <div className="freeboard_curPost_div">
                {post === null ? (
                    <div className="react-spinner_div">
                        <ReactLoading type={'spin'} color={'grey'} height={'50px'} width={'50px'} />
                    </div>
                ) : (
                    <div className="freeboard_content_div">
                        <h2>{post.title}</h2>
                        <div className="freeboard_post_info">
                            <span>{post.author} | </span>
                            <span>작성 : {convertNumberIntoDateFormatWithDetail(post.date)}</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                )}
                <div>
                    수정, 추천, 비추천 등
                </div>
            </div >
            <div>
                댓글
            </div>
            <div>
                목록보기
            </div>
        </div >
    )
}

export default CurrentPost;

