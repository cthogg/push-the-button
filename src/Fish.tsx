import React from "react";
import "./index.scss";

interface FishProps {
  custClass?: string;
}

const Fish: React.FC<FishProps> = ({ custClass }: FishProps) => {
  return (
    <span className={custClass}>
      <div className="fish">
        <div className="fish-body">
          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="fin"></div>
        <div className="fin fin-bottom"></div>
      </div>

      <div className="bubbles bubble-1"></div>
      <div className="bubbles bubble-5"></div>
      <div className="bubbles bubble-2"></div>
      <div className="bubbles bubble-6"></div>
      <div className="bubbles bubble-3"></div>
      <div className="bubbles bubble-7"></div>
      <div className="bubbles bubble-4"></div>
      <div className="bubbles bubble-8"></div>
    </span>
  );
};

export default Fish;
