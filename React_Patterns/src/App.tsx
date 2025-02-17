import "./App.css";
import { DataProvider } from "./renderPropsPattern/DataProvider";

function App() {
  return (
    <>
      {/* renderProps pattern */}
      <div>
        <DataProvider
          render={(data) => (
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        />
      </div>
    </>
  );
}

export default App;
