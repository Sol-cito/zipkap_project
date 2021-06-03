import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/FreeBoard.css";
import { useCookies } from 'react-cookie';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@material-ui/core/";


const FreeBoard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loginDone']);

    return (
        <div className="freeBoard_div">
            <Table>
                <TableHead>
                    <TableCell>No</TableCell>
                    <TableCell>분류</TableCell>
                    <TableCell>제목</TableCell>
                    <TableCell>글쓴이</TableCell>
                    <TableCell>날짜</TableCell>
                    <TableCell>추천</TableCell>
                    <TableCell>비추</TableCell>
                    <TableCell>조회</TableCell>
                </TableHead>
                <TableBody>
                    {/* <TableRow>테이블 로우 바디</TableRow> */}
                </TableBody>

            </Table>

        </div>
    )
}

export default FreeBoard;

