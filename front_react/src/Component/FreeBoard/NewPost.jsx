import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import EditorComponent from './EditorComponent';
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

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("전송 title : " + title);
        console.log("전송 content : " + content);
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

