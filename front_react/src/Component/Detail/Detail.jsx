import "../../CSS/Detail.scss";
import Map from "./Map";
import BarChart from "./BarChart";
export default () => {
  return (
    <div className={"band"}>
      <h1 />
      <div className={"item-head"}>
        <div className={"card"}>
          <article>
            <h1>한남더힐 아파트 상세정보</h1>
          </article>
        </div>
      </div>
      <div className={"item-tags"}>
        <div className={"card"}>
          <article>
            <span>
              <span className={"symbol"}>&#129351;</span>한남동 매매가 1위
            </span>
            <span>
              <span className={"symbol"}>&#128640;</span>최근 3달간 매매가 5%
              상승
            </span>
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
        <div className={"card"}>
          <Map />
          <article>
            <h1>위치</h1>
            <span>서울특별시 용산구 한남동 독서당로 111</span>
          </article>
        </div>
      </div>
      <div className={"item-3"}>
        <a href="/" className={"card"}>
          <BarChart />
          <article>
            <h1>매매가/매매량</h1>
            <span>Harry Brignull</span>
          </article>
        </a>
      </div>
      
      <h1 />
    </div>
  );
};
