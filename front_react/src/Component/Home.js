import React, { useEffect, useState } from "react";
import SearchBar from './SearchBar';
import APICallTest from './APICallTest';
import "./Style.css";

const Home = () => {
  return (
    <div>
      <span>이건 홈 화면</span>
      <div>
        <SearchBar />
      </div>
      <div>
        <APICallTest />
      </div>
      <span>이건 끝</span>
    </div>
  )
};


export default Home;
