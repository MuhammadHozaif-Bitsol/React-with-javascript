import { useState } from "react";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          className="minus"
          aria-label="Decrease count"
          onClick={decrement}
        >
          –
        </button>
        <h2 className="count">{count}</h2>
        <button
          className="plus"
          aria-label="Increase count"
          onClick={increment}
        >
          +
        </button>
      </div>
    </main>
  );
}
