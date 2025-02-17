import "./App.css";
import { Page } from "./Open_Closed/Page";
import {
  DefaultProductList,
  GridProductList,
  SliderProductList,
} from "./Liskov/Page";
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
        {/* Open-Closed Prinсiple */}
        <Page />
      </div>
      <div>
        {/* Liskov Prinсiple */}
        <DefaultProductList
          products={[
            { id: 0, name: "Michael" },
            { id: 1, name: "Jhon" },
          ]}
        />
        <GridProductList
          products={[
            { id: 0, name: "Michael" },
            { id: 1, name: "Jhon" },
          ]}
        />
        <SliderProductList
          products={[
            { id: 0, name: "Michael" },
            { id: 1, name: "Jhon" },
          ]}
        />
      </div>
    </>
  );
}

export default App;
