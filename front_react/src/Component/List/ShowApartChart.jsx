import React from "react";
import "./List.css";

//차트 사용을 위한 선언
import {
  LineChart,
  ScatterChart,
  Scatter,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ShowApartChart = ({ lists, loading }) => {
  return (
    <>
      {loading && <div>loading...</div>}
      {/* 차트 표시 */}
      <div className="showChart">
      {lists[0].apartment_name}
        <ScatterChart
          width={500}
          height={400}
          margin={{
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="deal_day" name="거래일" />
          <YAxis dataKey="deal_amount" name="거래가격" unit="000원" />
          <Tooltip />
          <Scatter name="A school" data={lists} fill="#8884d8" />
        </ScatterChart>

        <LineChart
          width={500}
          height={400}
          data={lists}
          margin={{
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          }}
        >
          <CartesianGrid strokeDasharray="20 20" />
          <XAxis dataKey="deal_day" />
          <YAxis unit="000원" />
          <Tooltip />
          <Legend />
          <Line dataKey="deal_amount" stroke="#8884d8" activeDot={{ r: 10 }} />
        </LineChart>
      </div>
    </>
  );
};

export default ShowApartChart;
