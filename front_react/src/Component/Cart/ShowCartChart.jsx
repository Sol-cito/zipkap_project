import { Box } from "@material-ui/core";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ShowCartChart = ({ lists, loading }) => {
  return (
    <>
      {loading && <div>loading...</div>}
      {/* 차트 표시 */}

      <Box height={400}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={lists}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="apartment_name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="deal_amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <span className="showChart"></span>
    </>
  );
};

export default ShowCartChart;
