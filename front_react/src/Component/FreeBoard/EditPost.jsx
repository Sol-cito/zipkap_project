import React, { useEffect, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import EditorComponent from './EditorComponent';
import PostSaveRequestAxios from './PostSaveRequestAxios';
import { Button } from "@material-ui/core/";
import { useLocation } from "react-router"; // hist


const EditPost = () => {
    const [cookies] = useCookies(['loginDone']);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const location = useLocation();

    /* 첫 페이지 로딩 시 post 메소드로 게시글을 불러온다 */
    useEffect(() => {
        window.scrollTo(0, 0); // 화면 맨 위로 올리기
        if (location.state) { // '수정'을 눌렀을 때 파라미터를 가져왔다면(undefined가 아니면)
            const post = location.state.post;
            setTitle(post.title);
            setContent(post.content);
        }
    }, []);

    if (cookies.loginDone === undefined) {
        window.location.replace("/"); // 로그인 한 상태 아니면 메인화면으로 리다이렉트
        return ( //아무것도 return하지 않는다.
            <div></div>
        )
    }

    const handleTitleChange = (e) => {
        if (e.target.value.length >= 50) {
            alert("제목은 50자 이내로 입력하셔야 합니다");
            return;
        }
        setTitle(e.target.value);
    }

    const handleEditorChange = (value) => {
        setContent(value);
    }

    /* post 데이터를 묶어서 전송할 객체 */
    const formData = {
        title: title,
        content: content
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("전송 title : " + title);
        console.log("전송 content : " + content);
        if (window.confirm("글을 저장하시겠습니까?")) {
            PostSaveRequestAxios(formData, (response) => {
                if (response) {
                    alert("글이 정상적으로 등록되었습니다.");
                    window.location.replace("/FreeBoard") // 글 저장 완료 시 게시판으로 이동한다
                } else {
                    alert("[ERROR] 글 저장에 문제가 발생하였습니다.");
                }
            });
        }
    }

    return (
        <div className="freeBoard_div">
            <form onSubmit={handleOnSubmit}>
                <div className="postEditor_div">
                    <input className="postTitle" name="title" placeholder="제목을 50자 이내로 입력해 주세요." maxLength='50' onChange={handleTitleChange} value={title} />
                    <EditorComponent value={content} onChange={handleEditorChange} />
                </div>
                <div className="postButtonDiv">
                    <Button variant="contained" color="default" type="submit"> 저장 </Button>
                </div>
            </form>
        </div>
    )
}

export default EditPost;

