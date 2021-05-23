import React from "react";

const Pagination = ({ listsPerPage, totalLists, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalLists / listsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div clssName="pagenation">
      <ul className="pageUl">
        {pageNumbers.map((list) => (
          <li className="pageLi" key={list}>
            <span className="pageSpan" onClick={() => paginate(list)}>
              {list}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
