import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@material-ui/core/";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { convertNumberIntoDateFormat } from './convertNumberIntoDateFormat.js';
import ReactLoading from 'react-loading';


const FreeBoard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);

    const [posts, setPosts] = useState([]); // 각 post를 array에 담음
    const [loadingDone, setLoading] = useState(false);

    /* 첫 페이지 로딩 시 get 메소드로 게시글을 불러온다 */
    useEffect(async () => {
        window.scrollTo(0, 0); // 화면 맨 위로 올리기
        const response = await axios.get('/api/freeBoard/');
        setLoading(true);
        setPosts(response.data);
    }, [loadingDone]);

    return (
        <div className="freeBoard_div">
            <div className="freeBoard_Table_div">
                <Table>
                    <TableHead className="freeBoard_TableHead">
                        <TableCell className="freeBoard_TableHeadCell" width="2%">No</TableCell>
                        <TableCell className="freeBoard_TableHeadCell" width="5%">분류</TableCell>
                        <TableCell className="freeBoard_TableHeadCell" width="20%">제목</TableCell>
                        <TableCell className="freeBoard_TableHeadCell" width="5%">글쓴이</TableCell>
                        <TableCell className="freeBoard_TableHeadCell" width="8%">작성일</TableCell>
                        <TableCell className="freeBoard_TableHeadCell" width="5%">추천</TableCell>
                        <TableCell className="freeBoard_TableHeadCell" width="5%">비추</TableCell>
                        <TableCell className="freeBoard_TableHeadCell" width="5%">조회</TableCell>
                    </TableHead>
                    <TableBody>
                        {posts.map(post => (
                            <TableRow className="freeBoard_TableBodyRow">
                                <TableCell key={post.post_seq} className="freeBoard_TableBodyCell">{post.post_seq}</TableCell>
                                <TableCell className="freeBoard_TableBodyCell">구현중</TableCell>
                                <TableCell className="freeBoard_TableBodyCell_title">
                                    <Link to={"/FreeBoard/CurrentPost/" + post.post_seq}>
                                        {post.title}
                                    </Link>
                                </TableCell>
                                <TableCell className="freeBoard_TableBodyCell">{post.author}</TableCell>
                                <TableCell className="freeBoard_TableBodyCell">{convertNumberIntoDateFormat(post.date)}</TableCell>
                                <TableCell style={{ color: "blue" }} className="freeBoard_TableBodyCell">{post.like_cnt}</TableCell>
                                <TableCell style={{ color: "red" }} className="freeBoard_TableBodyCell">{post.dislike_cnt}</TableCell>
                                <TableCell className="freeBoard_TableBodyCell">{post.hit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {!loadingDone ? (
                    <div className="react-spinner_div">
                        <ReactLoading type={'spin'} color={'grey'} height={'50px'} width={'50px'} />
                    </div>
                ) : null}
            </div>
            <div>
                {cookies.loginDone != undefined ? (
                    <Link to="/FreeBoard/NewPost">
                        <Button variant="contained" color="primary">글쓰기</Button>
                    </Link>
                ) : null}
            </div>
            <div>
                <form>
                    <input type="text" placeholder="게시글 검색"></input>
                    <Button variant="contained" color="primary" type="submit">검색</Button>
                </form>
            </div>
        </div>
    )
}

export default FreeBoard;

