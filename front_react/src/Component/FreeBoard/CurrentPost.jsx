import React, { useEffect, useState } from 'react';
import "../../CSS/FreeBoard.css";
import CurrentPostRequestAxios from './CurrentPostRequestAxios';
import IncreasePostHitRequestAxios from './IncreasePostHitRequestAxios';
import LikeAndDislikeRequestAxios from './LikeAndDislikeRequestAxios';
import BasicInfoRequestAxios from "../MyPage/BasicInfoRequestAxios";
import { convertNumberIntoDateFormatWithDetail } from './convertNumberIntoDateFormat.js'
import ReactLoading from 'react-loading';
import { Button, Modal } from "@material-ui/core";

const CurrentPost = ({ match, history }) => {
    const [post, setPost] = useState(null);
    const [loadingDone, setLoading] = useState(false);
    const [loginID, setLoginID] = useState("");
    const [modalShow, setModalShow] = useState(false);

    const [pushLikeOrDislike, setLikeOrDislike] = useState(0);

    /* 첫 페이지 로딩 시 post 메소드로 게시글을 불러온다 */
    useEffect(() => {
        window.scrollTo(0, 0); // 화면 맨 위로 올리기
        BasicInfoRequestAxios((response) => { // 로그인 info를 먼저 체크한 후
            setLoginID(response.data.email);

            if (!loadingDone) {
                IncreasePostHitRequestAxios(match.params.post_seq, (response => { // 콜백 함수에서 조회수를 늘린다
                    CurrentPostRequestAxios(match.params.post_seq, (response => { // 콜백 함수에서 curPost의 정보를 얻는다.
                        if (response !== false) {
                            setPost(response);
                            setLoading(true);
                        }
                    }));
                }));
            } else {
                CurrentPostRequestAxios(match.params.post_seq, (response => { // 콜백 함수에서 curPost의 정보를 얻는다.
                    if (response !== false) {
                        setPost(response);
                        setLoading(true);
                    }
                }));
            }
        });
    }, [pushLikeOrDislike]);

    const handleDeleteClick = (e) => {
        alert("삭제 함수");
        // PostDeleteRequestAxios(post.post_seq, (response) => {
        //     if (response) {
        //         alert("글이 정상적으로 삭제되었습니다.");
        //         window.location.replace("/FreeBoard") // 글 저장 완료 시 게시판으로 이동한다
        //     } else {
        //         alert("[ERROR] 글 삭제에 문제가 발생하였습니다.");
        //     }
        // });
    }

    const handleModificationClick = () => {
        if (window.confirm("글을 수정하시겠습니까?")) {
            history.push({ // confirm 시 EditPost 컴포넌트로 이동한다.
                pathname: "/FreeBoard/EditPost",
                state: { post: post } // 이동시 가져갈 파라미터. 자세한 내용은 공식문서 history push 부분을 참고.
            });
        }
    }

    const handleLikeAndDislike = (val) => {
        switch (val) {
            case "like":
                LikeAndDislikeRequestAxios(post.post_seq, 1, (response => {
                    setLikeOrDislike(pushLikeOrDislike + 1);
                }));
                break;
            case "dislike":
                LikeAndDislikeRequestAxios(post.post_seq, 2, (response => {
                    setLikeOrDislike(pushLikeOrDislike + 1);
                }));
                break;
            default:
                break;
        }

    }

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
                            <span> 조회 :  {post.hit} | </span>
                            <span style={{ fontWeight: "bold", color: "blue" }}> 추천 : {post.like_cnt} </span> |
                            <span style={{ fontWeight: "bold", color: "red" }}> 비추 : {post.dislike_cnt} </span> |
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        <div className="freeboard_curPost_footer">
                            {post.author_id === loginID ? (
                                <div style={{ display: "inline" }}>
                                    <Button variant="contained" color="default" type="submit" style={{ margin: "0 5px 0 5px" }} onClick={() => handleModificationClick()}> 수정 </Button>
                                    <Button variant="contained" color="default" type="submit" style={{ margin: "0 5px 0 5px" }} onClick={() => setModalShow(true)}> 삭제 </Button>
                                    <Modal
                                        open={modalShow}
                                        onClose={() => setModalShow(false)}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >
                                        <div style={{ textAlign: "center", margin: "0 0 15px 0" }}>
                                            <div style={{ background: "white"}}>
                                                <h2>게시글 삭제</h2>
                                                <p>게시글을 삭제하시겠습니까?</p>
                                                <Button onClick={() => alert("테스트")}>삭제</Button>
                                                <Button onClick={() => alert("테스트")}>취소</Button>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            ) : null}
                            <div style={{ display: "inline" }}>
                                <Button variant="contained" color="primary" style={{ margin: "0 5px 0 5px" }} onClick={() => { handleLikeAndDislike("like") }}> 추천 </Button>
                                <Button variant="contained" name="dislike" color="secondary" style={{ margin: "0 5px 0 5px" }}
                                    onClick={() => { handleLikeAndDislike("dislike") }}> 비추 </Button>
                            </div>
                        </div>
                        <div style={{ display: "block" }}>
                            <textarea className="freeboard_post_comment" placeholder="댓글 작성"></textarea>
                        </div>
                        <div style={{ display: "block", textAlign: "right", margin: "0 0 15px 0" }}>
                            <Button variant="contained" color="default" type="submit"> 댓글 쓰기 </Button>
                        </div>
                    </div>

                )}
            </div >
        </div >
    )
}

export default CurrentPost;

