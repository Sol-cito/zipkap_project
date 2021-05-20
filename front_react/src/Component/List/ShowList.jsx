import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";

//테이블 사용을 위한 선언
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core/";

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
  Treemap,
} from "recharts";

//달력 사용을 위한 선언
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const GetApart = () => {
  const [apartUrl, setApartUrl] = useState("/api/list/apartment_name");
  const [apartLists, setapartLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApartList = async () => {
      try {
        setError(null);
        setapartLists(null);
        setLoading(true);
        const response = await axios(apartUrl);
        setapartLists(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
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
          setApartUrl("/api/list/apartment_name");
        }}
      >
        아파트별(임시)
      </button>
      {/* 차트 표시 */}

      <LineChart
        width={400}
        height={400}
        data={apartLists}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      />
    </div>
  );
};

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
      <GetApart></GetApart>
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
              <TableCell>순번</TableCell>
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
                <TableCell>{list.rownum}</TableCell>
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

        <Treemap
          width={400}
          height={200}
          data={lists}
          dataKey="deal_amount"
          content="apartment_name"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
        />

        <LineChart
          width={1000}
          height={1000}
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
          cx={500}
          cy={500}
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
