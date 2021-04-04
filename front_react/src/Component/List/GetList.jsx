import React, { useState, useEffect } from "react";
import axios from "axios";

function GetList() {
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios.get(
          "/lists/20210101"
        );
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
    <ul>
      {lists.map((list) => (
        <li key={list.deal_day}>
          {list.apartment_name} ({list.deal_amount}000원)
        </li>
      ))}
    </ul>
  );
}

export default GetList;
