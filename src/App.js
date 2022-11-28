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
  const [reSort1, setReSort1] = useState("null");
  const [reSort2, setReSort2] = useState("null");
  const [reSort3, setReSort3] = useState("null");
  const [reSort4, setReSort4] = useState("null");
  const [reSort5, setReSort5] = useState("null");
  const [reSort6, setReSort6] = useState("null");
  const [reSort7, setReSort7] = useState("null");
  const [reSort8, setReSort8] = useState("null");
  const [reSort9, setReSort9] = useState("null");
  const [reSort10, setReSort10] = useState("null");
  const [reSort11, setReSort11] = useState("null");
  const [reSort12, setReSort12] = useState("null");
  const [reSort13, setReSort13] = useState("null");
  const [reSort14, setReSort14] = useState("null");
  const randomColor = () => {
    const resultDigit = [];
    for (let i = 1; i <= 6; i++) {
      const randomAlphabet =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      resultDigit.push(randomAlphabet);
    }
    setColorChange(resultDigit.join(""));

    //2개씩 나눠 재조합
    const reSort1 = resultDigit.slice(0, 2).join("");
    const reSort2 = resultDigit.slice(2, 4).join("");
    const reSort3 = resultDigit.slice(4, 6).join("");

    const reSorted1 = reSort1 + reSort3 + reSort2;
    const reSorted2 = reSort2 + reSort1 + reSort3;
    const reSorted3 = reSort2 + reSort3 + reSort1;
    const reSorted4 = reSort3 + reSort1 + reSort2;
    const reSorted5 = reSort3 + reSort2 + reSort1;

    const reSorted6 = reSort1 + reSort1 + reSort1;
    const reSorted7 = reSort2 + reSort2 + reSort2;
    const reSorted8 = reSort3 + reSort3 + reSort3;

    const reSorted9 = reSort1 + reSort1 + reSort2;
    const reSorted10 = reSort1 + reSort1 + reSort3;
    const reSorted11 = reSort2 + reSort2 + reSort1;
    const reSorted12 = reSort2 + reSort2 + reSort3;
    const reSorted13 = reSort3 + reSort3 + reSort1;
    const reSorted14 = reSort3 + reSort3 + reSort2;

    setReSort1(reSorted1);
    setReSort2(reSorted2);
    setReSort3(reSorted3);
    setReSort4(reSorted4);
    setReSort5(reSorted5);
    setReSort6(reSorted6);
    setReSort7(reSorted7);
    setReSort8(reSorted8);
    setReSort9(reSorted9);
    setReSort10(reSorted10);
    setReSort11(reSorted11);
    setReSort12(reSorted12);
    setReSort13(reSorted13);
    setReSort14(reSorted14);
  };

  return (
    <div>
      <button onClick={randomColor}>컬러 체인지</button>
      <RandomColor color={colorChange} />
      <h1 style={{ color: `#${colorChange}` }}>
        CSS HEX CODE VARIATION #{colorChange}
      </h1>
      <div className="flexColor">
        <RandomColor color={reSort1} />
        <RandomColor color={reSort2} />
        <RandomColor color={reSort3} />
        <RandomColor color={reSort4} />
        <RandomColor color={reSort5} />
      </div>
      <div className="flexColor">
        <RandomColor color={reSort6} />
        <RandomColor color={reSort7} />
        <RandomColor color={reSort8} />
      </div>
      <div className="flexColor">
        <RandomColor color={reSort9} />
        <RandomColor color={reSort10} />
        <RandomColor color={reSort11} />
        <RandomColor color={reSort12} />
        <RandomColor color={reSort13} />
        <RandomColor color={reSort14} />
      </div>
    </div>
  );
}

export default App;
