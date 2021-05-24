import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core/";

const ShowList = ({ lists, setApartUrl, loading }) => {
  return (
    <>
      {loading && <div>loading...</div>}
      <div className="showList">
        <div className="showTable">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>순번</TableCell>
                <TableCell>아파트 이름</TableCell>
                <TableCell>거래일자</TableCell>
                <TableCell>거래가격</TableCell>
                <TableCell>아파트 주소</TableCell>
                <TableCell>층수</TableCell>
                <TableCell>면적</TableCell>
                <TableCell>찜하기</TableCell>
                <TableCell>상세보기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists &&
                lists.map((list) => (
                  <TableRow className="tableRow" key={list.deal_day}>
                    <TableCell>{list.rownum}</TableCell>
                    <TableCell
                      className="tableRowApartName"
                      onClick={() => {
                        alert(list.apartment_name + " 차트로 변경합니다");
                        setApartUrl("/api/list/apart/" + list.apartment_name);
                      }}
                    >
                      {list.apartment_name}
                    </TableCell>
                    <TableCell>{list.deal_day}</TableCell>
                    <TableCell>{list.deal_amount}000원</TableCell>
                    <TableCell>{list.road_name}</TableCell>
                    <TableCell>{list.floor}층</TableCell>
                    <TableCell>
                      {list.area_for_exclusive_use} 제곱 미터
                    </TableCell>
                    <TableCell
                      className="tableRowLike"
                      onClick={() => {
                        alert("장바구니에 추가합니다");
                      }}
                    >
                      좋아요
                    </TableCell>
                    <TableCell
                      className="tableRowGoDetail"
                      onClick={() => {
                        alert("상세보기 화면으로 이동합니다");
                      }}
                    >
                      이동
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ShowList;
