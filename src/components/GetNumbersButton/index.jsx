import React from "react";

import "./style.css";

const GetNumbersButton = ({ action }) => {
  return (
    <div className="getNumbers" onClick={() => action()}>
      <p>Get Numbers</p>
    </div>
  );
};

export default GetNumbersButton;
