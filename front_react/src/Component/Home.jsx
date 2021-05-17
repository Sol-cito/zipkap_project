import "./Style.css";
import "../CSS/Home.css";
import SearchBar from "./SearchBar";
import ShowList from "./List/ShowList";

function Home() {
  return (
    <div className="home_div">
      <span>이건 홈 화면</span>
      <div>
        <SearchBar />
      </div>
      <ShowList />
      <span>이건 끝</span>
    </div>
  );
}

export default Home;
