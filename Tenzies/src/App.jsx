import Die from "./components/Die";
import { nanoid } from "nanoid";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [dieValues, setDieValues] = useState(generateAllNewDice);
  function generateAllNewDice() {
    let dieNumbers = [];
    for (let i = 0; i < 10; i++) {
      dieNumbers.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      });
    }
    return dieNumbers;
  }
  function rollDice() {
    setDieValues(generateAllNewDice);
  }
  return (
    <main>
      <div className="dice-container">
        {dieValues.map((dieobj, index) => (
          <Die key={dieobj.id} value={dieobj.value} />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
