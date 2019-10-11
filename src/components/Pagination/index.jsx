import React from "react";
import PaginationItem from "../PaginationItem";

import "./style.css";

const Pagination = ({ length }) => {
  let pagItems = [];
  for (let i = 1; i <= parseInt(length); i++) {
    pagItems.push(<PaginationItem text={i} type="number" />);
  }

  return (
    <div className="pagination">
      <PaginationItem text="Previous" type="text" />
      {pagItems.map(item => item)}
      <PaginationItem text="Next" type="text" />
    </div>
  );
};

export default Pagination;
