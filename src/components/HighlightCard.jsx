import React from "react";

const HighlightCard = (props) => {
  const { title, value, unit, param } = props;
  return (
    <div className="highlight w-3/12 min-w-max h-full mx-0 my-2.5 p-2.5">
      <p className="highlight-name text-[0.9rem]">{title}</p>
      <div className="hightlight-details flex flex-row items-center justify-between h-full text-[1.2rem] px-0 py-[5px]">
        <p className="highlight-value">
          {value}
          <span className="highlight-unit">{unit}</span>
        </p>
        {param && (
          <div className="additional">
            <p className="highlight-param">{param && param}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighlightCard;
