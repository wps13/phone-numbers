import React from "react";

import "./style.css";

export default ({ number, cost }) => {
  return (
    <div data-testid="number-card" className="numberCard">
      <p className="numberCard__number">
        <span>Number: </span>
        {number}
      </p>
      <p className="numberCard__cost">
        <span> cost: </span>
        {cost}
      </p>
    </div>
  );
};
