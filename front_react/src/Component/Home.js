import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./Style.css";

function Home() {
  const LIST_API_BASE_URL = "http://localhost:8080/lists/20210101";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(LIST_API_BASE_URL);
    const json = await response.json();
  }

  useEffect(() => {
    axios
      .get(LIST_API_BASE_URL)
      .then((result) => setData(result.data))
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div>
      <span>이건 홈 화면</span>
      <div>
        <SearchBar />
      </div>
      {setData.apartment_name}:{data.apartment_name}
      {setData}:<span>이건 끝</span>
    </div>
  );
}

export default Home;
