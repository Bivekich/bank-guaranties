import React from "react";
import "../style/offerStep.css";

export const OfferStep = ({ number, title, body }) => {
  const numberOrder = (number % 2) + 1;
  return (
    <div className="OfferStep">
      <div className="elipse" style={{ order: numberOrder }}>
        <span>{number}</span>
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{body}</p>
        <a href="#form" className="button">
          <span>Оставить заявку</span>
        </a>
      </div>
    </div>
  );
};
export default OfferStep;
