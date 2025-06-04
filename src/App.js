import "./App.css";
//Обработка:
// •	множественных операторов (см. user story #13)
// •	операций после =
// •	одного . в числе
// •	предотвращение нескольких нулей в начале числа
function App() {
  return (
    <div className="container mt-5 text-center">
      <div id="display" className="mb-3 fs-4 border rounded p-2 bg-light">
        DISPLAY
      </div>

      <div className="row justify-content-center">
        {/* Keypad Section */}
        <div id="keypad" className="col-md-6">
          <div className="row g-2">
            <div className="col-4">
              <button id="one" className="btn btn-dark w-100">
                1
              </button>
            </div>
            <div className="col-4">
              <button id="two" className="btn btn-dark w-100">
                2
              </button>
            </div>
            <div className="col-4">
              <button id="three" className="btn btn-dark w-100">
                3
              </button>
            </div>

            <div className="col-4">
              <button id="four" className="btn btn-dark w-100">
                4
              </button>
            </div>
            <div className="col-4">
              <button id="five" className="btn btn-dark w-100">
                5
              </button>
            </div>
            <div className="col-4">
              <button id="six" className="btn btn-dark w-100">
                6
              </button>
            </div>

            <div className="col-4">
              <button id="seven" className="btn btn-dark w-100">
                7
              </button>
            </div>
            <div className="col-4">
              <button id="eight" className="btn btn-dark w-100">
                8
              </button>
            </div>
            <div className="col-4">
              <button id="nine" className="btn btn-dark w-100">
                9
              </button>
            </div>

            <div className="col-4">
              <button id="clear" className="btn btn-danger w-100">
                AC
              </button>
            </div>
            <div className="col-4">
              <button id="zero" className="btn btn-dark w-100">
                0
              </button>
            </div>
            <div className="col-4">
              <button id="decimal" className="btn btn-dark w-100">
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
          <button id="divide" className="btn btn-secondary">
            /
          </button>
          <button id="multiply" className="btn btn-secondary">
            *
          </button>
          <button id="subtract" className="btn btn-secondary">
            -
          </button>
          <button id="add" className="btn btn-secondary">
            +
          </button>
          <button id="equals" className="btn btn-success">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
