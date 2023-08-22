import { useState } from "react";
import "./App.css";
import { AntdTableComp } from "./antdTable/antdTableComp";
import { AntdTableHeader } from "./antdTable/antdTableHeader";
import { ProgressBar } from "./imageSvgComps/progressBor";

function App() {
  const [percent,setPercent]=useState(99)
  return (
    <div className="App">
      <AntdTableHeader />
      <AntdTableComp setPercent={setPercent}/>
      {/* <ProgressBar percent={percent}/> */}
    </div>
  );
}

export default App;
