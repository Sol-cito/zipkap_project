import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import EditorComponent from './EditorComponent';
import PostSaveRequestAxios from './PostSaveRequestAxios';
import { Button } from "@material-ui/core/";


const NewPost = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e) => {
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
                    <input className="postTitle" name="title" placeholder="제목을 입력해 주세요." onChange={handleTitleChange} />
                    <EditorComponent value={content} onChange={handleEditorChange} />
                </div>
                <div className="postButtonDiv">
                    <Button variant="contained" color="default" type="submit"> 저장 </Button>
                </div>
            </form>
        </div>
    )
}

export default NewPost;

