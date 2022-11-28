import React from "react";

const RandomColor = ({ color }) => {
  return (
    <div>
      <div
        className="recommendColor"
        style={{ backgroundColor: `#${color}` }}
      ></div>
      <h1 style={{ color: `#${color}` }}>#{color}</h1>
    </div>
  );
};

export default RandomColor;
