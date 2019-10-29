import React from "react";
import "./index.scss";

interface FireworksProps {
    custClass: string
}

const Fireworks: React.FC<FireworksProps>  = ({custClass}: FireworksProps) => {
  return (
      <span className={custClass}> 
    <div className="pyro">
    <div className="before"></div>
    <div className="after"></div> </div></span>
  );
}

export default Fireworks;
