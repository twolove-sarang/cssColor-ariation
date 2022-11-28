import "./App.css";
import RandomColor from "./component/RandomColor";
import { useState } from "react";

// a~f까지 넣기v
// - 알파벳, 숫자 섞기
// - 숫자만 나올수도 있다.
// - 알파벳만 나올수도 있다.
// 6자리 이하 안나오게 하기v
// 3가지 컬러 바리에이션 만들기(조합 색상, 그라데이션, 랜덤색상)

function App() {
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
  const [colorChange, setColorChange] = useState("버튼을 눌러보세요!");
  const [colorVariation, setColorVariation] = useState([]);
  const randomColor = () => {
    const resultDigit = [];
    for (let i = 1; i <= 6; i++) {
      const randomAlphabet =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      resultDigit.push(randomAlphabet);
    }
    setColorChange(resultDigit.join(""));
    //2개씩 나눠 재조합

    const colorVariationArr = [];
    for (let i = 0; i <= alphabet.length; i += 3) {
      const variation =
        resultDigit.slice(0, 4).join("") + alphabet[i].repeat(2);
      colorVariationArr.push(variation);
      setColorVariation(colorVariationArr);
    }
  };

  return (
    <div>
      <button onClick={randomColor}>컬러 체인지</button>
      <RandomColor color={colorChange} />
      <h1 style={{ color: `#${colorChange}` }}>CSS HEX CODE VARIATION </h1>

      <div className="flexColor">
        <RandomColor color={colorVariation[2]} />
        <RandomColor color={colorVariation[3]} />
        <RandomColor color={colorVariation[4]} />
        <RandomColor color={colorVariation[5]} />
      </div>
    </div>
  );
}

export default App;
