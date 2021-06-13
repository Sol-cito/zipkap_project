import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import CurrentPostRequestAxios from './CurrentPostRequestAxios';
import { convertNumberIntoDateFormatWithDetail } from './convertNumberIntoDateFormat.js'
import ReactLoading from 'react-loading';
import { Button } from "@material-ui/core/";


const CurrentPost = ({ match }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);

    const [post, setPost] = useState(null);
    const [loadingDone, setLoading] = useState(false);

    /* 첫 페이지 로딩 시 post 메소드로 게시글을 불러온다 */
    useEffect(async () => {
        window.scrollTo(0, 0); // 화면 맨 위로 올리기
        CurrentPostRequestAxios(match.params.post_seq, (response => {
            if (response !== false) {
                setPost(response);
                setLoading(true);
            }
        }));
    }, [loadingDone]);

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
                            글쓴이 :<span style={{ fontWeight: "bold", color: "blue" }}> {post.author}</span> |
                            <span> 작성 : {convertNumberIntoDateFormatWithDetail(post.date)} | </span>
                            <span>조회 :  {post.hit} | </span>
                            <span style={{ fontWeight: "bold", color: "blue" }}> 추천 : post.like</span> |
                            <span style={{ fontWeight: "bold", color: "red" }}> 비추 : post.dislike </span> |
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        <div className="freeboard_curPost_footer">
                            <Button variant="contained" color="default" type="submit" style={{ margin: "0 5px 0 5px" }}> 수정 </Button>
                            <Button variant="contained" color="primary" type="submit" style={{ margin: "0 5px 0 5px" }}> 추천 </Button>
                            <Button variant="contained" color="secondary" type="submit" style={{ margin: "0 5px 0 5px" }}> 비추 </Button>
                        </div>
                        <div style={{ display: "block" }}>
                            <textarea className="freeboard_post_comment" placeholder="댓글 작성"></textarea>
                        </div>
                        <div style={{ display: "block", textAlign: "right", margin:"0 0 15px 0"}}>
                            <Button variant="contained" color="default" type="submit"> 댓글 쓰기 </Button>
                        </div>
                    </div>

                )}
            </div >
        </div >
    )
}

export default CurrentPost;

