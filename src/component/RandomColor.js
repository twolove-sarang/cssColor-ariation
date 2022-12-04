import React from "react";

const RandomColor = ({ color, name }) => {
  return (
    <div>
      <div className="recommendColor" style={{ backgroundColor: `#${color}` }}></div>
      <p className="sub_color_name">{name}</p>
      <h1 className="sub_color_code">#{color}</h1>
    </div>
  );
};

export default RandomColor;
