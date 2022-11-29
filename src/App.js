import "./App.css";
import RandomColor from "./component/RandomColor";
import HistorySection from "./component/HistorySection";
import { useState } from "react";

// a~f까지 넣기v
// - 알파벳, 숫자 섞기
// - 숫자만 나올수도 있다.
// - 알파벳만 나올수도 있다.
// 6자리 이하 안나오게 하기v
// 3가지 컬러 바리에이션 만들기(조합 색상, 그라데이션, 랜덤색상)

function App() {
  const alphabet = [
    "f",
    "e",
    "d",
    "c",
    "b",
    "a",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
  ];
  const [colorChange, setColorChange] = useState("버튼을 눌러보세요!");
  const [colorVariation, setColorVariation] = useState([]);
  const [recommendColor, setRecommendColor] = useState([]);

  const randomColor = () => {
    //컬러 추천
    const resultDigit = [];
    for (let i = 1; i <= 6; i++) {
      const randomAlphabet =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      resultDigit.push(randomAlphabet);
    }
    setColorChange(resultDigit.join(""));

    //히스토리

    //포인트컬러, 서브컬러
    const recommendColor =
      resultDigit.slice(1, 3).join("") +
      resultDigit.slice(3, 5).join("") +
      resultDigit.slice(3, 5).join("");

    setRecommendColor(recommendColor);

    //그라데이션
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
      <h1 style={{ color: `#${colorChange}` }}>CSS HEX CODE VARIATION </h1>
      <RandomColor color={colorChange} />

      <RandomColor color={recommendColor} />

      <div className="flexColor">
        <RandomColor color={colorVariation[0]} />
        <RandomColor color={colorVariation[1]} />
        <RandomColor color={colorVariation[2]} />
        <RandomColor color={colorVariation[3]} />
        <RandomColor color={colorVariation[4]} />
        <RandomColor color={colorVariation[5]} />
      </div>
    </div>
  );
}

export default App;
