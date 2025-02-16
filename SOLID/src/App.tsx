import "./App.css";
import { Posts } from "./S/Posts";
import { Users } from "./S/Users";

function App() {
  return (
    <>
      <div>
        {/* Single Responsibility Principle */}
        <Posts />
        <Users />
      </div>
    </>
  );
}

export default App;
