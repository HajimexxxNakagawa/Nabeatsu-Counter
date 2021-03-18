import React from "react";
import "./App.css";
import { useNabeatsu } from "./useNabeatsu";

function App() {
  const [count, countUp, isAho] = useNabeatsu();

  return (
    <div className="App">
      <h1>世界のナベアツカウンター</h1>
      <p>{count}</p>
      <div className="btn" onClick={countUp}>
        Count up!
      </div>
      {!isAho && <div>Nabeatsu(Normal)</div>}
      {isAho && <div className="aho">Nabeatsu(Aho)</div>}
    </div>
  );
}

export default App;
