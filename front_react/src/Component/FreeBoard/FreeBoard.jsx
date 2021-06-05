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


const FreeBoard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);

    return (
        <div className="freeBoard_div">
            <div className="freeBoard_Table_div">
                <Table>
                    <TableHead>
                        <TableCell width="5%">No</TableCell>
                        <TableCell width="5%">분류</TableCell>
                        <TableCell width="20%">제목</TableCell>
                        <TableCell width="5%">글쓴이</TableCell>
                        <TableCell width="8%">날짜</TableCell>
                        <TableCell width="5%">추천</TableCell>
                        <TableCell width="5%">비추</TableCell>
                        <TableCell width="5%">조회</TableCell>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>셀1</TableCell>
                            <TableCell>셀2</TableCell>
                            <TableCell>셀3</TableCell>
                            <TableCell>셀4</TableCell>
                            <TableCell>셀5</TableCell>
                            <TableCell>셀6</TableCell>
                            <TableCell>셀7</TableCell>
                            <TableCell>셀8</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div>
                <Link to="/FreeBoard/NewPost">
                    <Button variant="contained" color="primary">글쓰기</Button>
                </Link>
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

