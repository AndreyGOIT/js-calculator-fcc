import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const isOperator = (char) => /[+\-*/]/.test(char);

  const handleInput = (event) => {
    const input = event.target.value;
    // const lastChar = display.toString()[display.length - 1];

    //if last char is dot and new input is dot, return
    if (input === ".") {
      const lastNumber = display.split(/[+\-*/]/).pop();
      if (lastNumber.includes(".")) return;
    }

    //if first char is 0 and second char is not dot, replace 0 with input
    if (display === "0" && input !== ".") {
      if (/[+\-*/]/.test(input)) {
        return setDisplay(input);
      }
    }

    setDisplay(display + input);
  };

  const handleOperator = (operator) => {
    const lastChar = display[display.length - 1];
    const secondLastChar = display[display.length - 2];

    if (isOperator(lastChar)) {
      if (operator === "-" && lastChar !== "-") {
        //allow only one negative sign
        return setDisplay(display + operator);
      }
      if (isOperator(secondLastChar)) {
        return setDisplay(display.slice(0, -2) + operator);
      }
      return setDisplay(display.slice(0, -1) + operator);
    }
    setDisplay(display + operator);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleEvaluate = () => {
    try {
      let cleaned = display.replace(/\b0+(?=\d)/g, ""); // remove leading zeros
      const result = evaluate(cleaned);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="container mt-5 text-center">
      <div id="display" className="mb-3 fs-4 border rounded p-2 bg-light">
        {display}
      </div>

      <div className="row justify-content-center">
        {/* Keypad Section */}
        <div id="keypad" className="col-md-6">
          <div className="row g-2">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].map(
              (num) => (
                <div className="col-4" key={num}>
                  <button
                    id={num === "." ? "decimal" : num === "0" ? "zero" : num}
                    className="btn btn-dark w-100"
                    onClick={() => handleInput({ target: { value: num } })}
                  >
                    {num}
                  </button>
                </div>
              )
            )}

            <div className="col-4">
              <button
                id="clear"
                className="btn btn-danger w-100"
                onClick={handleClear}
              >
                AC
              </button>
            </div>
          </div>
        </div>

        {/* Operations Section */}
        <div
          id="operations"
          className="col-md-2 d-flex flex-column gap-2 mt-3 mt-md-0"
        >
          {[
            { id: "divide", symbol: "/" },
            { id: "multiply", symbol: "*" },
            { id: "subtract", symbol: "-" },
            { id: "add", symbol: "+" },
          ].map(({ id, symbol }) => (
            <button
              key={id}
              id={id}
              className="btn btn-secondary"
              onClick={() => handleOperator(symbol)}
            >
              {symbol}
            </button>
          ))}

          <button
            id="equals"
            className="btn btn-success"
            onClick={handleEvaluate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
