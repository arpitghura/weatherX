import React from "react";
import "../styles/Highlight.css";

const HighlightCard = (props) => {
  const { title, value, unit, param } = props;
  //   console.log(props);
  return (
    <div className="highlight card">
      <p className="highlight-name">{title}</p>
      <div className="hightlight-details">
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
