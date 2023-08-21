import "./App.css";
import { AntdTableComp } from "./antdTable/antdTableComp";
import { AntdTableHeader } from "./antdTable/antdTableHeader";

function App() {
  return (
    <div className="App">
      <AntdTableHeader />
      <AntdTableComp />
    </div>
  );
}

export default App;
