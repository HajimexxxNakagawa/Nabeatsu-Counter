import * as React from "react";

export interface NabeatsuProps {
  isAho: boolean;
}

const Nabeatsu: React.VFC<NabeatsuProps> = ({ isAho }) => {
  return (
    <>
      {!isAho && <div>Nabeatsu(Normal)</div>}
      {isAho && <div className="aho">Nabeatsu(Aho)</div>}
    </>
  );
};

export default Nabeatsu;
