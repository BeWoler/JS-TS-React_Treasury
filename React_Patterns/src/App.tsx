import "./App.css";
import { DataProvider } from "./renderPropsPattern/DataProvider";
import { Toggle } from "./renderPropsPattern/Toggle";
import { Layout } from "./slotsPattern/Layout";

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
      {/* Slots Pattern */}
      <div>
        <Layout
          header={<h1>Welcome</h1>}
          sidebar={
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          }
          content={<p>Main content goes here...</p>}
        />
      </div>
    </>
  );
}

export default App;
