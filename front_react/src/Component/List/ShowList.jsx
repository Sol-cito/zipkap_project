import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BasicInfoRequestAxios from "../MyPage/BasicInfoRequestAxios";
import axios from "axios";

const ShowList = ({ lists, setApartUrl, loading }) => {
  const [isWishChange, setIsWishChange] = useState(false);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    BasicInfoRequestAxios((response) => {
      setEmail(response.data.email);
    });
  }, []);

  const wishChangeHandler = ({ list }) => {
    if (window.confirm("찜 하시겠어요?")) {
      setIsWishChange(!isWishChange);
      axios({
        url: "/api/cart/wishAdd",
        method: "post",
        headers: {
          "Content-Type": `application/json ; charset=utf-8`,
        },
        data: JSON.stringify({
          cart_email: email,
          cart_serial_number: list.serial_number,
          cart_floor: list.floor,
          cart_apartment_name: list.apartment_name,
          cart_deal_day: list.deal_day,
          wishState: isWishChange,
        }),
      });
    }
  };

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
                <TableCell>상세보기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists &&
                lists.map((list) => (
                  <TableRow className="tableRow" key={list.deal_day}>
                    <TableCell>{list.rownum}</TableCell>
                    <TableCell
                      className="tableRowApartName"
                      onClick={() => {
                        alert(list.apartment_name + " 차트로 변경합니다");
                        setApartUrl("/api/list/apart/" + list.apartment_name);
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
                      className="tableRowLike"
                      onClick={() => {
                        wishChangeHandler({ list });
                      }}
                    >
                      좋아요
                    </TableCell>
                    <TableCell className="tableRowGoDetail">
                      <Link to="/Detail">이동</Link>
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
