import React from "react";

import "./style.css";

const DataInput = ({ text, change }) => {
  return (
    <div className="dataInput">
      <h2 className="dataInput__text">{text}</h2>
      <input
        type="number"
        name="cost"
        min="1"
        onInput={e => {
          e.persist();
          change(e);
        }}
        className="dataInput__value"
      />
    </div>
  );
};

export default DataInput;
