import React from "react";

const HistorySection = ({ history }) => {
  console.log("history", history);
  return (
    <div>
      <div>history</div>
      <div
        className="recommendColor"
        style={{ backgroundColor: `#${history}` }}
      ></div>
      <h1 style={{ color: `#${history}` }}>#{history}</h1>
    </div>
  );
};

export default HistorySection;
