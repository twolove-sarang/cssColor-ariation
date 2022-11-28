import "./App.css";
import { useState } from "react";

function App() {
  const [change, setChange] = useState(null);
  const colorChangeButton = () => {
    randomColor();
  };

  const randomColor = () => {
    setChange(Math.ceil(Math.random() * 1000000));
    //a~f까지 넣기
  };

  return (
    <div>
      <button onClick={colorChangeButton}>컬러체인지!</button>
      <h1 style={{ color: `#${change}` }}>오늘의 색깔 #{change}</h1>
      헬로 달링
    </div>
  );
}

export default App;
