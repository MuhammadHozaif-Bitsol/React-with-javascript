import Die from "./components/Die";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [dieValues, setDieValues] = useState(generateAllNewDice);
  function generateAllNewDice() {
    let dieNumbers = [];
    for (let i = 0; i < 10; i++) {
      dieNumbers.push(Math.floor(Math.random() * 6 + 1));
    }
    return dieNumbers;
  }
  function rollDice() {
    setDieValues(generateAllNewDice);
  }
  return (
    <main>
      <div className="dice-container">
        {dieValues.map((val, index) => (
          <Die key={index} value={val} />
        ))}
        <button className="roll-dice" onClick={rollDice()}>
          Roll
        </button>
      </div>
    </main>
  );
}
