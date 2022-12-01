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
  const [colorChange, setColorChange] = useState([]);
  const [colorVariation, setColorVariation] = useState([]);
  const [recommendColor, setRecommendColor] = useState([]);
  const [historyUpdate, setHistoryUpdate] = useState([]);

  const randomColor = () => {
    //컬러 추천
    const randomAlphabet =
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)];
    setColorChange(randomAlphabet);

    //히스토리
    // const historyArr = colorChange
    // setHistoryUpdate(...historyArr, historyArr);

    //포인트컬러, 서브컬러
    const recommendColor =
      randomAlphabet.split("").slice(1, 3).join("") +
      randomAlphabet.split("").slice(3, 5).join("") +
      randomAlphabet.split("").slice(3, 5).join("");

    setRecommendColor(recommendColor);

    //그라데이션
    const colorVariationArr = [];
    for (let i = 0; i <= alphabet.length; i += 3) {
      const variation =
        randomAlphabet.split("").slice(0, 4).join("") + alphabet[i].repeat(2);
      colorVariationArr.push(variation);
      setColorVariation(colorVariationArr);
    }
  };

  return (
    <div className="main_part">
      <div>{historyUpdate}</div>

      <h1 className="main_title">HEX Color palette</h1>
      <p className="sub_explain">
        컬러 조합으로 골머리 앓는 디자이너를 위해
        <br />
        HEX코드로 컬러를 뽑아주는 사이트 입니다🤟
      </p>
      <button onClick={randomColor} className="colorChangeButton">
        컬러 셀렉터
      </button>
      <div className="combination_color">
        <RandomColor color={colorChange} name="Primary" />
        <RandomColor color={recommendColor} name="Secondary" />
      </div>

      <div className="bar"></div>

      <div className="sub_explain">Recommend Color</div>
      <div className="flexColor">
        <RandomColor color={colorVariation[0]} />
        <RandomColor color={colorVariation[1]} />
        <RandomColor color={colorVariation[2]} />
        <RandomColor color={colorVariation[3]} />
        <RandomColor color={colorVariation[4]} />
        <RandomColor color={colorVariation[5]} />
      </div>

      <div className="bar"></div>

      <div className="example_flex">
        <div>
          <div className="sub_explain2">Button Style</div>
          <div className="example_design">
            <button
              style={{
                color: `#${colorChange}`,
                backgroundColor: `#${recommendColor}`,
              }}
            >
              Button
            </button>
            <button
              style={{
                color: `#${recommendColor}`,
                backgroundColor: `#${colorChange}`,
              }}
            >
              Button
            </button>
            <button
              style={{
                color: `#${recommendColor}`,
                border: `1px solid #${colorChange}`,
                backgroundColor: `white 0.1`,
              }}
            >
              Button
            </button>
            <button
              style={{
                color: `#${colorChange}`,
                border: `1px solid #${recommendColor}`,
                backgroundColor: `white 0.1`,
              }}
            >
              Button
            </button>
          </div>
        </div>

        <div>
          <div className="sub_explain2">Input Style</div>
          <div className="example_design">
            <input
              placeholder="type it!"
              style={{
                color: `#${colorChange}`,
                backgroundColor: `#${recommendColor}`,
              }}
            />
            <input
              placeholder="type it!"
              style={{
                color: `#${recommendColor}`,
                backgroundColor: `#${colorChange}`,
              }}
            />
            <input
              placeholder="type it!"
              style={{
                color: `#${recommendColor}`,
                border: `1px solid #${colorChange}`,
                backgroundColor: `white 0.1`,
              }}
            />
            <input
              placeholder="type it!"
              style={{
                color: `#${colorChange}`,
                border: `1px solid #${recommendColor}`,
                backgroundColor: `white 0.1`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
