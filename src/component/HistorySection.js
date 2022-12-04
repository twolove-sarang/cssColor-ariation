import React from "react";

export default function HistorySection({ history }) {
  const deleteCode = () => {};
  console.log(history);
  return (
    <div className="historyFlex">
      {history.historyID.map((el, index) => (
        <div>
          <div className="historyColor" key={index} style={{ backgroundColor: `#${el.code}` }} onClick={deleteCode}></div>
        </div>
      ))}
    </div>
  );
}
