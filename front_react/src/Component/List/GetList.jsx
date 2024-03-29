import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "../../CSS/List.css";
import ShowList from "./ShowList";
import ShowChart from "./ShowChart";
import Pagination from "./Pagination";
import GetApart from "./GetApart";

const GetList = () => {
  const [url, setUrl] = useState("/api/list/recent");
  const [lists, setLists] = useState([]);
  const [apartUrl, setApartUrl] = useState("/api/list/apart/apartment_name");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [day, setDay] = useState(new Date());
  const [yyyymmdd, setYyyyMmDd] = useState("20210307");
  const [currentPage, setCurrentPage] = useState(1);
  const [listsPerPage] = useState(20);


  useEffect(() => {
    const getRecentList = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios.get(url);
        setLists(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getRecentList();
  }, [url]);

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
      <div className="getListButton">
        <button
          onClick={() => {
            setUrl("/api/list/recent");
          }}
        >
          최신목록
        </button>
        <button
          onClick={() => {
            setUrl("/api/list/recent2");
          }}
        >
          최신목록2
        </button>
      </div>

      <div className="showCalendar">
        {/* 달력 표시 */}
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={day}
          onChange={(date) => {
            setYyyyMmDd(moment(date).format("YYYYMMDD"));
            setDay(date);
          }}
        />
        <button
          onClick={() => {
            alert(yyyymmdd);
            setUrl("/api/list/" + yyyymmdd);
          }}
        >
          날짜별목록
        </button>
      </div>

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

      <ShowChart lists={currentLists(lists)} loading={loading}></ShowChart>

      <div className="getApart">
        <GetApart apartUrl={apartUrl}></GetApart>
      </div>
    </div>
  );
};

export default GetList;
