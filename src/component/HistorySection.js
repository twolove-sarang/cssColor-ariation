import React from "react";

export default function HistorySection({ history, onClick }) {
  return (
    <div className="flex p-8 overflow-scroll gap-8 ">
      {history &&
        history.map((el) => (
          <div
            onClick={() => onClick(el)}
            className="w-8 h-8 rounded-full shrink-0 cursor-pointer"
            style={{ backgroundColor: `#${el}` }}
          ></div>
        ))}
    </div>
  );
}
