import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import "react-datepicker/dist/react-datepicker.css";

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
import DatePicker from "react-datepicker";

const ShowList = () => {
  const [url, setUrl] = useState("/api/list/recent");
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [day, setDay] = useState(new Date());

  useEffect(() => {
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
  }, [url]);

  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!lists) return null;

  return (
    <div className="showList">
      <div className="getListButton">
        <button
          onClick={() => {
            const day = "recent";
            alert(day);
            setUrl("/api/list/" + day);
          }}
        >
          최신목록
        </button>
        <button
          onClick={() => {
            const day = "recent2";
            alert(day);
            setUrl("/api/list/" + day);
          }}
        >
          최신목록2
        </button>
      </div>
      <div>
        <DatePicker
          selected={day}
          onChange={(date) => {
            setDay(date);
            alert(day);
          }}
          name="day"
          dateFormat="MM/dd/yyyy"
        />
        <button
          onClick={() => {
            alert(day);
            setUrl("/api/list/dealDay/" + { day });
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
