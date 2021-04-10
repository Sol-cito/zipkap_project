import React from "react";
import SearchBar from './SearchBar';
import "./Style.css";
import GetRecentList from "./List/GetRecentList";

function Home() {
  return (
    <div>
      <span>이건 홈 화면</span>
      <div>
        <SearchBar />
      </div>
      <GetRecentList />
      <span>이건 끝</span>
    </div>
  );
}

export default Home;
