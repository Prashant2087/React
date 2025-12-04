import "react-dom";
import "./App.css";

import { useState } from "react";
export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button
          type="submit"
          onClick={() => setStep((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          -
        </button>
        Step: {step}
        <button type="submit" onClick={() => setStep((prev) => prev + 1)}>
          +
        </button>
      </div>
      <div>
        <button type="submit" onClick={() => setCount((prev) => prev - step)}>
          -
        </button>
        Count: {count}
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
      </div>
    </>
  );
}
