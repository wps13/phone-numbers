import React from "react";

import "./style.css";

const GetNumbersButton = ({ action }) => {
  return (
    <div data-testid="button" className="getNumbers" onClick={() => action()}>
      <p>Get Numbers</p>
    </div>
  );
};

export default GetNumbersButton;
