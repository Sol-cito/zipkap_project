import React, { useState, useEffect } from "react";
import GetDayList from "./GetDayList";
import axios from "axios";
import "./List.css";

function GetRecentList() {
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios.get("/api/list/recent");
        setLists(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchLists();
  }, []);

  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!lists) return null;

  return (
    <div className="recentList">
      <button className="searchRecentList" onClick={GetRecentList}>
        최신목록조회
      </button>
      <form className="searchDayList" onSubmit={GetDayList}>
        <button type="submit">일자별목록조회</button>
      </form>
      <ol>
        {lists.map((list) => (
          <li key={list.deal_day}>
            {list.apartment_name} ({list.deal_amount}000원) 계약일 :{" "}
            {list.deal_day} <br />
            {list.road_name} {list.floor}층
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GetRecentList;
