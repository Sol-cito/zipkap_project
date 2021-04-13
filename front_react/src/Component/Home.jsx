import React from "react";
import "./Style.css";
import SearchBar from "./SearchBar";
import GetRecentList from "./List/GetRecentList";
import LineChart from "./List/LineChart";
import RedarChart from "./List/RedarChart";

function Home() {
  return (
    <div>
      <span>이건 홈 화면</span>
      <div>
        <SearchBar />
      </div>
      <GetRecentList />
      <LineChart />
      <RedarChart />
      <span>이건 끝</span>
    </div>
  );
}

export default Home;
