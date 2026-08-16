import Die from "./components/Die";
import { nanoid } from "nanoid";
import "./App.css";
import Confetti from "react-confetti";
import { useState } from "react";
export default function App() {
  const [dieValues, setDieValues] = useState(() => {
    return generateAllNewDice();
  });
  const gameWon =
    dieValues.every((die) => die.isHeld) &&
    dieValues.every((die) => die.value === dieValues[0].value);
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
    if (!gameWon) {
      setDieValues((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else setDieValues(generateAllNewDice());
  }
  function hold(id) {
    setDieValues((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }
  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {dieValues.map((dieobj, index) => (
          <Die
            key={dieobj.id}
            value={dieobj.value}
            isHeld={dieobj.isHeld}
            hold={() => hold(dieobj.id)}
          />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
