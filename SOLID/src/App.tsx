import "./App.css";
import { Page } from "./Open_Closed/Page";
import { Posts } from "./Single_Responsibility/Posts";
import { Users } from "./Single_Responsibility/Users";

function App() {
  return (
    <>
      <div>
        {/* Single Responsibility Principle */}
        <Posts />
        <Users />
      </div>
      <div>
        {/* Open-Closed Pricniple */}
        <Page />
      </div>
    </>
  );
}

export default App;
