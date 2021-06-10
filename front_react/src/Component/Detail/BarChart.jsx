import { Box } from "@material-ui/core";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "동네",
    매매가: 4000,
    매매량: 2400,
  },
  {
    name: "한남더힐",
    매매가: 3000,
    매매량: 1398,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <Box height={400}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="매매가" fill="#8884d8" />
            <Bar dataKey="매매량" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
