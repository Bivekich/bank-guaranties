import React from "react";
import "../style/plus.css";

export const Plus = ({ image, title, body }) => (
  <div className="plus_container">
    <div className="plus">
      <img src={image} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
