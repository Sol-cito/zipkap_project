import React, { useState, useEffect } from "react";
import axios from "axios";

const GetDayList = () => {
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios.get("/api/list/dealDay/20210101");
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
    <div className="dayList">
      <ul>
        {lists.map((list) => (
          <li key={list.deal_day}>
            {list.apartment_name} ({list.deal_amount}000원)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetDayList;
