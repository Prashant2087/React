import "react-dom";
import "./App.css";

import { useState } from "react";
export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + Number(count));

  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button type="submit" onClick={() => setCount((prev) => prev - step)}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" onClick={() => setCount((prev) => prev + step)}>
          +
        </button>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>

          {date.toDateString()}
        </p>
        {(count !== 0 || step !== 1) && (
          <button
            type="submit"
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}
