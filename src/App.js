import "./App.css";
import RandomColor from "./component/RandomColor";
import { useState } from "react";
import ButtonPreview from "./component/ButtonPreview";
import InputPreview from "./component/InputPreview";
import HistorySection from "./component/HistorySection";

// a~f까지 넣기v
// - 알파벳, 숫자 섞기
// - 숫자만 나올수도 있다.
// - 알파벳만 나올수도 있다.
// 6자리 이하 안나오게 하기v
// 3가지 컬러 바리에이션 만들기(조합 색상, 그라데이션, 랜덤색상)

export default function App() {
  const alphabet = ["f", "e", "d", "c", "b", "a", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const [colorChange, setColorChange] = useState({ color: "ffffff" });
  const [colorVariation, setColorVariation] = useState([]);
  const [recommendedColor, setRecommendedColor] = useState([]);
  const [history, setHistory] = useState({ historyID: [{ code: "ffffff" }] });

  const randomColor = () => {
    //컬러 추천, 개별 digit 필요
    const randomAlphabet =
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)];
    setColorChange((color) => ({ ...color, color: randomAlphabet }));

    //히스토리
    const code = randomAlphabet;
    setHistory((color) => ({ ...color, historyID: [{ code }, ...color.historyID] }));

    //포인트컬러, 서브컬러
    const recommendColor =
      randomAlphabet.split("").slice(1, 3).join("") +
      randomAlphabet.split("").slice(1, 3).join("") +
      randomAlphabet.split("").slice(3, 5).join("");
    setRecommendedColor(recommendColor);

    //그라데이션
    const colorVariationArr = [];
    for (let i = 0; i <= alphabet.length; i += 3) {
      const variation = randomAlphabet.split("").slice(0, 4).join("") + alphabet[i].repeat(2);
      colorVariationArr.push(variation);
    }
    setColorVariation(colorVariationArr);
  };

  return (
    <div className="main_part">
      <HistorySection history={history} />
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
        <RandomColor color={colorChange.color} name="Primary" />

        <RandomColor color={recommendedColor} name="Secondary" />
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
          <ButtonPreview color={{ colorChange, recommendedColor }} />
        </div>
        <div>
          <div className="sub_explain2">Input Style</div>
          <InputPreview color={{ colorChange, recommendedColor }} />
        </div>
      </div>
    </div>
  );
}
