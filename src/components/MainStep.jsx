import React from "react";
import "../style/mainStep.css";

export const MainStep = ({ number, title, body }) => (
  <div className="step-container">
    <div className="step">
      <div className="elipse">{number}</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
