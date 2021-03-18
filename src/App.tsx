import React from "react";
import "./App.css";
import { useNabeatsu } from "./useNabeatsu";
import Nabeatsu from "./Nabeatsu";

function App() {
  const [count, countUp, isAho] = useNabeatsu();

  return (
    <div className="App">
      <h1>世界のナベアツカウンター</h1>
      <p>{count}</p>
      <div className="btn" onClick={countUp}>
        Count up!
      </div>
      <Nabeatsu isAho={isAho} />
    </div>
  );
}

export default App;
