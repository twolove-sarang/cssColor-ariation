import "./App.css";
import { useState } from "react";

function App() {
  const [change, setChange] = useState("버튼을 눌러보세요!");
  //a~f까지 넣기
  // - 알파벳, 숫자 섞기
  // - 숫자만 나올수도 있다.
  // - 알파벳만 나올수도 있다.
  //6자리 이하 안나오게 하기v
  //3가지 컬러 바리에이션 만들기(조합 색상, 그라데이션, 랜덤색상)
  // const randomSet = Math.floor(Math.random() * 1000000).toString();
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const randomColor = () => {
    const resultDigit = [];
    for (let i = 1; i <= 6; i++) {
      const randomAlphabet =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      resultDigit.push(randomAlphabet);
    }
    setChange(resultDigit.join(""));
  };

  return (
    <div>
      <button onClick={randomColor}>컬러체인지!</button>
      <h1 style={{ color: `#${change}` }}>CSS HEX CODE VARIATION #{change}</h1>
      <h1 style={{ color: `#${change - 1}` }}>
        CSS HEX CODE VARIATION #{change}
      </h1>
    </div>
  );
}

export default App;
