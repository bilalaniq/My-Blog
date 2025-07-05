import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full  bg-accent text-light whitespace-nowrap overflow-hidden ">
      <div className=" animate-roll w-full py-3 flex items-center capitalize font-semibold tracking-wider text-base">
        {insights.map((text) => (
          <div>
            {text} <span className="px-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
