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
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Treemap,
} from "recharts";

const ShowChart = ({ lists, loading }) => {
  return (
    <>
      {loading && <div>loading...</div>}
      {/* 차트 표시 */}
      <div className="showChart">
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

        <Treemap
          width={500}
          height={400}
          margin={{
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          }}
          data={lists}
          dataKey="deal_amount"
          content="apartment_name"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
        />

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
          <XAxis dataKey="apartment_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="deal_amount" stroke="#8884d8" activeDot={{ r: 20 }} />
        </LineChart>

        <RadarChart
          cx={250}
          cy={200}
          outerRadius={100}
          width={500}
          height={400}
          margin={{
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          }}
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
    </>
  );
};

export default ShowChart;
