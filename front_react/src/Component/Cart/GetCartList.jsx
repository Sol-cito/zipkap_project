import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "../../CSS/List.css";
import ShowList from "./ShowCartList";
import ShowCartChart from "./ShowCartChart";
import Pagination from "../List/Pagination";
import GetApart from "../List/GetApart";
import BasicInfoRequestAxios from "../MyPage/BasicInfoRequestAxios";

const GetCartList = () => {
  const [lists, setLists] = useState([]);
  const [apartUrl, setApartUrl] = useState("/api/list/apart/apartment_name");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [listsPerPage] = useState(20);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    BasicInfoRequestAxios((response) => {
      setEmail(response.data.email);
    });
  }, []);

  useEffect(() => {
    const getCartList = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios.get("/api/cart/" + email);
        setLists(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getCartList();
  }, [email]);

  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!lists) return null;

  const indexOfLast = currentPage * listsPerPage;
  const indexOfFirst = indexOfLast - listsPerPage;

  const currentLists = (tmp) => {
    let currentLists = 0;
    currentLists = tmp.slice(indexOfFirst, indexOfLast);
    return currentLists;
  };

  return (
    <div className="App">
      <br></br>
      <div>장바구니 목록을 확인하세요</div>
      <ShowCartChart
        lists={currentLists(lists)}
        loading={loading}
      ></ShowCartChart>
      <button onClick={() => {}}>장바구니 넣은 순</button>

      <button onClick={() => {}}>거래량 순</button>

      <button onClick={() => {}}>매매가 순</button>
      <ShowList
        lists={currentLists(lists)}
        setApartUrl={setApartUrl}
        loading={loading}
      ></ShowList>

      <Pagination
        listsPerPage={listsPerPage}
        totalLists={lists.length}
        paginate={setCurrentPage}
      ></Pagination>

      <div className="getApart">
        <GetApart apartUrl={apartUrl}></GetApart>
      </div>
    </div>
  );
};

export default GetCartList;
