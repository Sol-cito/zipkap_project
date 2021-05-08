import React from "react";
import "./Style.css";
import "../CSS/Home.css";
import SearchBar from "./SearchBar";
import GetRecentList from "./List/GetRecentList";
import GetDayList from "./List/GetDayList";
import LineChart from "./List/LineChart";
import RedarChart from "./List/RedarChart";
import ShowList from "./List/ShowList";

function Home() {
  return (
    <div className="home_div">
      <span>이건 홈 화면</span>
      <div>
        <SearchBar />
      </div>
      <ShowList />
      <GetDayList />
      {/* <GetRecentList/> */}
       {/*<LineChart />
      <RedarChart /> */}
      <span>이건 끝</span>
    </div>
  );
}

export default Home;
