import * as React from "react";

export interface NabeatsuProps {
  isAho: boolean;
}

const Nabeatsu: React.VFC<NabeatsuProps> = ({ isAho }) => (
  <>
    {isAho ? (
      <div className="aho">Nabeatsu(Aho)</div>
    ) : (
      <div>Nabeatsu(Normal)</div>
    )}
  </>
);

export default Nabeatsu;
