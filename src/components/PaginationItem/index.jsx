import React from "react";

import "./style.css";

const PaginationItem = ({ text, type }) => {
  return (
    <div className={"pagination-item " + type}>
      <p>{text}</p>
    </div>
  );
};

export default PaginationItem;
