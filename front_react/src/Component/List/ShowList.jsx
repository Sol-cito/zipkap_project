import React from "react";
import "./List.css";
import GetApart from "./GetApart";

//테이블 사용을 위한 선언
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core/";

const ShowList = ({ lists, loading }) => {
  return (
    <>
      {loading && <div>loading...</div>}
      <div className="showList">
        <div className="showTable">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>순번</TableCell>
                <TableCell>아파트 이름</TableCell>
                <TableCell>거래일자</TableCell>
                <TableCell>거래가격</TableCell>
                <TableCell>아파트 주소</TableCell>
                <TableCell>층수</TableCell>
                <TableCell>면적</TableCell>
                <TableCell>찜하기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists &&
                lists.map((list) => (
                  <TableRow key={list.deal_day}>
                    <TableCell>{list.rownum}</TableCell>
                    <TableCell
                      onClick={() => {
                        alert("차트 변경");
                      }}
                    >
                      {list.apartment_name}
                    </TableCell>
                    <TableCell>{list.deal_day}</TableCell>
                    <TableCell>{list.deal_amount}000원</TableCell>
                    <TableCell>{list.road_name}</TableCell>
                    <TableCell>{list.floor}층</TableCell>
                    <TableCell>
                      {list.area_for_exclusive_use} 제곱 미터
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        alert("좋아요");
                      }}
                    >
                      좋아요
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ShowList;
