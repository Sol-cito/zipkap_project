import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import "./List.css";

//차트 사용을 위한 선언
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

//달력 사용을 위한 선언
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const ShowList = () => {
  const [url, setUrl] = useState("/api/list/recent");
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [day, setDay] = useState(new Date());
  const [yyyymmdd, setYyyyMmDd] = useState("20210307");

  useEffect(() => {
    const getRecentList = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios(url);
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
      {/* 버튼 클릭시 day 를 기준으로 조회 */}
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
      <div className="showTable">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>아파트 이름</TableCell>
              <TableCell>거래일자</TableCell>
              <TableCell>거래가격</TableCell>
              <TableCell>아파트 주소</TableCell>
              <TableCell>층수</TableCell>
              <TableCell>면적</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((list) => (
              <TableRow key={list.deal_day}>
                <TableCell>{list.apartment_name}</TableCell>
                <TableCell>{list.deal_day}</TableCell>
                <TableCell>{list.deal_amount}000원</TableCell>
                <TableCell>{list.road_name}</TableCell>
                <TableCell>{list.floor}층</TableCell>
                <TableCell>{list.area_for_exclusive_use} 제곱 미터</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="showChart">
        {/* 차트 표시 */}
        <LineChart
          width={1000}
          height={900}
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
          cx={1000}
          cy={850}
          outerRadius={150}
          width={1000}
          height={1000}
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

      <div className="showListUl">
        {/* 조회된 목록 표시 */}
        <ul>
          {lists.map((list) => (
            <li key={list.deal_day}>
              {list.apartment_name} ({list.deal_amount}000원)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowList;
