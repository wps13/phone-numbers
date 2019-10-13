import React from "react";

import NumberCard from "../NumberCard";
import Pagination from "../Pagination";

import "./style.css";

const NumberPage = ({ data }) => {
  return (
    <div className="number-page">
      <h1>Available lines</h1>
      {data.map(line => (
        <NumberCard number={line.number} cost={line.cost} key={line.cost} />
      ))}
      <Pagination length={data.length} />
    </div>
  );
};

export default NumberPage;
