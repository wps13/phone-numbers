import React from "react";

import DataInput from "../DataInput";
import GetNumbersButton from "../GetNumbersButton";

import "./style.css";

const InitialPage = ({ change }) => {
  return (
    <div className="initial-page">
      <h1>Phone Numbers</h1>
      <div className="initial-page__inputs">
        <DataInput text="Page to be Viewed" change={e => change(e)} />
        <DataInput text="Amount of pages" change={e => change(e)} />
      </div>
      <GetNumbersButton />
    </div>
  );
};

export default InitialPage;
