import "../CSS/Style.css";
import "../CSS/Home.css";
import SearchBar from "./SearchBar";
import GetList from "./List/GetList";

function Home() {
  return (
    <div className="home_div">
      <SearchBar />
      <GetList />
    </div>
  );
}

export default Home;
