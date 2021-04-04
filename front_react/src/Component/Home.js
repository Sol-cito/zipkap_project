import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./Style.css";

const Home = () => {
  const LIST_API_BASE_URL = "http://localhost:8080/lists";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(LIST_API_BASE_URL).then((result) => setData(result.data));
  }, []);

  return (
    <div>
      <span>이건 홈 화면</span>
      <div>
        <SearchBar />
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.result}>
            {item.result}: {item.result}
          </li>
        ))}
      </ul>
      <span>이건 끝</span>
    </div>
  );
};

export default Home;
