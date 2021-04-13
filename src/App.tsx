import React from "react";
import Helmet from "react-helmet";
import "./App.css";
import { useNabeatsu } from "./useNabeatsu";
import Nabeatsu from "./Nabeatsu";
import AhoNabeatsu from "./images/Aho.png";

function App() {
  const [count, countUp, isAho] = useNabeatsu();

  return (
    <>
      <Helmet
        title="世界のナベアツカウンター"
        meta={[
          {
            name: "description",
            content:
              "世界のナベアツがいつアホになるのか確認できるカウンターアプリです",
          },
          { property: "og:title", content: "世界のナベアツカウンター" },
          { property: "og:type", content: "website" },
          {
            property: "og:url",
            content: "https://nabeatsu-counter.vercel.app/",
          },
          { property: "og:image", content: AhoNabeatsu },
          {
            property: "og:description",
            content:
              "世界のナベアツがいつアホになるのか確認できるカウンターアプリです",
          },
          { name: "twitter:card", content: "summary" },
          { name: "twitter:site", content: "@hajixxnaka" },
        ]}
      />
      <div className="App">
        <h1>世界のナベアツカウンター</h1>
        <p style={{ fontSize: `24px` }}>{count}</p>
        <div className="btn" onClick={countUp}>
          Count up!
        </div>
        <Nabeatsu isAho={isAho} />
      </div>
    </>
  );
}

export default App;
