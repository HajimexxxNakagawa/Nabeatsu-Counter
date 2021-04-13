import * as React from "react";
import AhoNabeatsu from "./images/Aho.png";
import NormalNabeatsu from "./images/Normal.png";

export interface NabeatsuProps {
  isAho: boolean;
}

const Nabeatsu: React.VFC<NabeatsuProps> = ({ isAho }) => (
  <>
    {isAho ? (
      <div className="image">
        <img
          src={AhoNabeatsu}
          alt="Nabeatsu(Aho)"
          style={{ width: "100vw", maxWidth: "500px" }}
        />
      </div>
    ) : (
      <div className="image">
        <img
          src={NormalNabeatsu}
          alt="Nabeatsu(Normal)"
          style={{ width: "100vw", maxWidth: "500px" }}
        />
      </div>
    )}
  </>
);

export default Nabeatsu;
