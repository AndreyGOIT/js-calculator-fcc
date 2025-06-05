import React, { useState } from "react";
import "./App.css";
//Обработка:
// •	множественных операторов (см. user story #13)
// •	операций после =
// •	одного . в числе
// •	предотвращение нескольких нулей в начале числа
function App() {
  const [display, setDisplay] = useState("0");

  const handleInput = (event) => {
    if (event.target.value === ".") {
      if (display.toString()[display.length - 1] === ".") {
        return;
      }
    }
    if (event.target.value === "0") {
      if (display.toString()[0] === "0") {
        return;
      }
    }
    if (display.toString()[0] === "0") {
      const input = event.target.value;
      const newDisplay = display + input;
      return setDisplay(newDisplay.toString().slice(1));
    }
    const input = event.target.value;
    setDisplay(display + input);
  };

  const handleEvaluate = () => {
    try {
      const result = eval(display);
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
            <div className="col-4">
              <button
                id="one"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "1" } })}
              >
                1
              </button>
            </div>
            <div className="col-4">
              <button
                id="two"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "2" } })}
              >
                2
              </button>
            </div>
            <div className="col-4">
              <button
                id="three"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "3" } })}
              >
                3
              </button>
            </div>

            <div className="col-4">
              <button
                id="four"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "4" } })}
              >
                4
              </button>
            </div>
            <div className="col-4">
              <button
                id="five"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "5" } })}
              >
                5
              </button>
            </div>
            <div className="col-4">
              <button
                id="six"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "6" } })}
              >
                6
              </button>
            </div>

            <div className="col-4">
              <button
                id="seven"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "7" } })}
              >
                7
              </button>
            </div>
            <div className="col-4">
              <button
                id="eight"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "8" } })}
              >
                8
              </button>
            </div>
            <div className="col-4">
              <button
                id="nine"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "9" } })}
              >
                9
              </button>
            </div>

            <div className="col-4">
              <button
                id="clear"
                className="btn btn-danger w-100"
                onClick={() => setDisplay("0")}
              >
                AC
              </button>
            </div>
            <div className="col-4">
              <button
                id="zero"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "0" } })}
              >
                0
              </button>
            </div>
            <div className="col-4">
              <button
                id="decimal"
                className="btn btn-dark w-100"
                onClick={() => handleInput({ target: { value: "." } })}
              >
                .
              </button>
            </div>
          </div>
        </div>

        {/* Operations Section */}
        <div
          id="operations"
          className="col-md-2 d-flex flex-column gap-2 mt-3 mt-md-0"
        >
          <button
            id="divide"
            className="btn btn-secondary"
            onClick={() => setDisplay(display + "/")}
          >
            /
          </button>
          <button
            id="multiply"
            className="btn btn-secondary"
            onClick={() => setDisplay(display + "*")}
          >
            *
          </button>
          <button
            id="subtract"
            className="btn btn-secondary"
            onClick={() => setDisplay(display + "-")}
          >
            -
          </button>
          <button
            id="add"
            className="btn btn-secondary"
            onClick={() => setDisplay(display + "+")}
          >
            +
          </button>
          <button
            id="equals"
            className="btn btn-success"
            onClick={() => handleEvaluate()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
