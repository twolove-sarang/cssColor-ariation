import React from "react";

export default function HistorySection({ history }) {
  //히스토리에서 코드 찾기
  const findCode = () => {
    history.historyID.map((el) => el);
  };
  console.log(history);
  return (
    <div className="historyFlex">
      {history.historyID.map((el, index) => (
        <div>
          <div className="historyColor" key={index} style={{ backgroundColor: `#${el.code}` }} onClick={findCode}></div>
        </div>
      ))}
    </div>
  );
}
