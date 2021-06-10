import "../../CSS/Detail.scss";
import Map from "./Map"
export default () => {
  return (
    <div className={"band"}>
      <div className={"item-head"}>
        <div className={"card"}>
          <article>
            <h1>한남더힐</h1>
            <span>&#129351; 한남동 매매가 1위</span>	
            <span>&#127783; 최근 3달간 매매가 5% 하락</span>	
          </article>
        </div>
      </div>
      <div className={"item-1"}>
        <a href="/Detail" className={"card"}>
          <div
            className={"thumb"}
            style={{
              backgroundImage: `url(https://newsimg.hankookilbo.com/cms/articlerelease/2020/11/01/5a4b5f41-c8bb-447c-9dc6-0263674670bd.jpg)`,
            }}
          ></div>
          <article>
            <h1> 사진</h1>
            <span>11개 검색</span>
          </article>
        </a>
      </div>
      <div className={"item-2"}>
        <a href="/" className={"card"}>
          <div
            className={"thumb"}
            style={{
              backgroundImage: `url("https://via.placeholder.com/500")`,
            }}
          ></div>
          <article>
            <Map/>
          </article>
        </a>
      </div>
      <div className={"item-3"}>
        <a href="/" className={"card"}>
          <div
            className={"thumb"}
            style={{
              backgroundImage: `url("https://via.placeholder.com/500")`,
            }}
          ></div>
          <article>
            <h1>한남더힐 관련 사진</h1>
            <span>Harry Brignull</span>
          </article>
        </a>
      </div>
    </div>
  );
};
