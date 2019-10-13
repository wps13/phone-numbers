import React from "react";

import "./style.css";

const PaginationItem = ({ text, type }) => {
  return (
    <div className={"pagination-item " + type} data-testid="pagination-item">
      <p>{text}</p>
    </div>
  );
};

export default PaginationItem;
