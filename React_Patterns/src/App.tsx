import "./App.css";
import { DataProvider } from "./renderPropsPattern/DataProvider";
import { Toggle } from "./renderPropsPattern/Toggle";

function App() {
  return (
    <>
      {/* renderProps pattern */}
      <div>
        {/* #1 */}
        <DataProvider
          render={(data) => (
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        />
        {/* #2 */}
        <Toggle
          render={(isToggled, toggle) => (
            <div>
              <p>The toggle is {isToggled ? "ON" : "OFF"}</p>
              <button onClick={toggle}>Toggle</button>
            </div>
          )}
        />
      </div>
    </>
  );
}

export default App;
