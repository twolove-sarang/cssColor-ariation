import React from "react";

const RandomColor = ({ color }) => {
  return (
    <div>
      <div
        className="recommendColor"
        style={{ backgroundColor: `#${color}` }}
      ></div>
    </div>
  );
};

export default RandomColor;
