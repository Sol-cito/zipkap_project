import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowApartChart from "./ShowApartChart";

function GetApart() {
  const [apartUrl, setApartUrl] = useState("/api/list/apart/apartment_name");
  const [apartLists, setApartLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApartList = async () => {
      try {
        setError(null);
        setApartLists(null);
        setLoading(true);
        const response = await axios.get(apartUrl);
        setApartLists(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getApartList();
  }, [apartUrl]);

  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!apartLists) return null;

  return (
    <div className="showChart">
      <button
        onClick={() => {
          setApartUrl("/api/list/apart/천성리버타운");
        }}
      >
        아파트별(임시)
      </button>
      <ShowApartChart lists={apartLists} loading={loading}></ShowApartChart>
    </div>
  );
}

export default GetApart;
