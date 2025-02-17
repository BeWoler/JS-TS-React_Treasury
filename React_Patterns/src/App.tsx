import "./App.css";
import { DataFetcher } from "./functionAsAChild/DataFetcher";
import { DataProvider } from "./renderPropsPattern/DataProvider";
import { Toggle } from "./renderPropsPattern/Toggle";
import { Layout } from "./slotsPattern/Layout";
import { Accordion } from "./сompositeComponents/Accordion";
import { AccordionItem } from "./сompositeComponents/AccordionItem";

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
      {/* Composite Components Pattern */}
      <Accordion>
        <AccordionItem title='Item 1'>
          <p>This is the content of item 1</p>
        </AccordionItem>
        <AccordionItem title='Item 2'>
          <p>This is the content of item 2</p>
        </AccordionItem>
        <AccordionItem title='Item 3'>
          <p>This is the content of item 3</p>
        </AccordionItem>
      </Accordion>
      {/* Function as a Child Pattern */}
      <DataFetcher url='https://jsonplaceholder.typicode.com/todos/1'>
        {(data, loading) => (
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p>Data: {JSON.stringify(data)}</p>
            )}
          </div>
        )}
      </DataFetcher>
    </>
  );
}

export default App;
