import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const ShowList = () => {
  const [button, setButtons] = useState(1);
  const [day, setDay] = useState("20210101");
  const [url, setUrl] = useState("/api/list/recent");
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (button === 1) {
      setUrl("/api/list/recent");
      console.log(url);
    } else if (button === 2) {
      setUrl("/api/list/dealDay/" + day);
      console.log(url);
    }

    const getRecentList = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios.get(url);
        setLists(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getRecentList();
  }, [button]);

  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!lists) return null;

  return (
    <div className="showList">
      <div className="getListButton">
        <button onClick={() => setButtons(1)}>최신목록</button>
        <button
          onClick={() => {
            setButtons(2);
            setDay("20210102");
          }}
        >
          날짜별목록
        </button>
      </div>
      <div className="showListUl">
        <ul>
          {lists.map((list) => (
            <li key={list.deal_day}>
              {list.apartment_name} ({list.deal_amount}000원)
            </li>
          ))}
        </ul>
      </div>
      <div>
        <LineChart
          width={500}
          height={300}
          data={lists}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="20 20" />
          <XAxis dataKey="apartment_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="deal_amount" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={lists}
        >
          <PolarGrid />
          <Tooltip />
          <Legend />
          <PolarAngleAxis dataKey="apartment_name" />
          <PolarRadiusAxis />
          <Radar dataKey="deal_amount" stroke="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </div>
  );
};

export default ShowList;
