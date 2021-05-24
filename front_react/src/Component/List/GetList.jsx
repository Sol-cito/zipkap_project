import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/List.css";
import ShowList from "./ShowList";
import ShowChart from "./ShowChart";
import Pagination from "./Pagination";
import GetApart from "./GetApart";

//달력 사용을 위한 선언
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function GetList() {
  const [url, setUrl] = useState("/api/list/recent");
  const [lists, setLists] = useState([]);
  const [apartUrl, setApartUrl] = useState("/api/list/apart/apartment_name");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [listsPerPage, setListsPerPage] = useState(20);

  const [day, setDay] = useState(new Date());
  const [yyyymmdd, setYyyyMmDd] = useState("20210307");

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

  function currentLists(tmp) {
    let currentLists = 0;
    currentLists = tmp.slice(indexOfFirst, indexOfLast);
    return currentLists;
  }

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

      <button
        onClick={() => {
          setApartUrl("/api/list/apart/천성리버타운");
        }}
      >
        아파트별(임시)
      </button>
      <GetApart apartUrl={apartUrl}></GetApart>
    </div>
  );
}
export default GetList;
