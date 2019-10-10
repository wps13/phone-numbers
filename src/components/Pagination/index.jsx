import React from "react";
import PaginationItem from "../PaginationItem";

import "./style.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <PaginationItem text="Previous" type="text" />
      <PaginationItem text="Next" type="text" />
    </div>
  );
};

export default Pagination;
