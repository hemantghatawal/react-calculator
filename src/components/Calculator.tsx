import { useState } from "react";
import "./Calculator.style.css";

const Arithemectic_Array = ["+", "-", "*", "/"];

const Calculator = () => {
  const [calculation, setCalculation] = useState("");
  const [output, setOutput] = useState(0);

  console.log("calculation =>", calculation);
  console.log("output =>", output);

  const handleDigitClick = (value: number) => {
      setOutput(0);
    setCalculation((calc) => calc + String(value));
  };

  const handleSymbolClick = (symbol: string) => {
    if (!calculation) return;
    setCalculation((calc) => calc + symbol);
  };

  const handleClickEqual = () => {
    // console.log(eval(calculation));
    setCalculation("");
    setOutput(eval(calculation));
  };

  return (
    <>
      <p className="output-box">{output ? output : calculation}</p>
      <br />
      <br />
      <div className="digit-buttons">
        {Array(9)
          .fill("")
          .map((ele, index) => (
            <button key={index} onClick={() => handleDigitClick(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
      <div className="symbol-buttons">
        {Arithemectic_Array.map((ele, index) => (
          <button key={index} onClick={() => handleSymbolClick(ele)}>
            {ele}
          </button>
        ))}
      </div>
      <div className="symbol-buttons">
        <button style={{width: "100%"}} onClick={handleClickEqual}>=</button>
      </div>
    </>
  );
};

export default Calculator;
