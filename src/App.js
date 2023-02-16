import "./App.css";
import { useState } from "react";
import ColorCard from "./component/ColorCard";
import ButtonPreview from "./component/ButtonPreview";
import InputPreview from "./component/InputPreview";
import HistorySection from "./component/HistorySection";
import Footer from "./component/Footer";

export default function App() {
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
  const [colorChange, setColorChange] = useState();
  const [history, setHistory] = useState([]);
  const [colorVariation, setColorVariation] = useState([]);
  const [recommendedColor, setRecommendedColor] = useState([]);

  const randomAlphabet =
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)];

  const recommendColor =
    colorChange.split("").slice(1, 3).join("") +
    colorChange.split("").slice(3, 5).join("") +
    colorChange.split("").slice(3, 5).join("");

  const colorVariationArr = [];
  for (let i = 0; i <= alphabet.length; i += 3) {
    const variation =
      colorChange.split("").slice(0, 4).join("") + alphabet[i].repeat(2);
    colorVariationArr.push(variation);
  }

  const handleClickToColorSelector = () => {
    setColorChange(randomAlphabet);
    setRecommendedColor(recommendColor);
    setColorVariation(colorVariationArr);
    setHistory([randomAlphabet, ...history]);
  };

  const handleChangeHistory = (code) => {
    setColorChange(code);
    setRecommendedColor(recommendColor);
    setColorVariation(colorVariationArr);
  };

  return (
    <div className="main_part">
      <HistorySection history={history} onClick={handleChangeHistory} />
      <h1 className="main_title font-bold text-4xl">HEX Color palette</h1>
      <p className="sub_explain">
        컬러 조합으로 골머리 앓는 디자이너를 위해
        <br />
        HEX코드로 컬러를 뽑아주는 사이트 입니다. 🤟
      </p>
      <button
        onClick={handleClickToColorSelector}
        className="colorChangeButton"
      >
        컬러 셀렉터
      </button>
      <div className="combination_color">
        <ColorCard color={colorChange} name="Primary" />
        <ColorCard color={recommendedColor} name="Secondary" />
      </div>

      <div className="bar"></div>

      <div className="sub_explain">Recommend Color</div>
      <div className="flexColor">
        <ColorCard color={colorVariation[0]} />
        <ColorCard color={colorVariation[1]} />
        <ColorCard color={colorVariation[2]} />
        <ColorCard color={colorVariation[3]} />
        <ColorCard color={colorVariation[4]} />
        <ColorCard color={colorVariation[5]} />
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
      <Footer />
    </div>
  );
}
