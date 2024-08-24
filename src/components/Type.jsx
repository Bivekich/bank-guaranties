import React from "react";
import "../style/type.css";

export const Type = ({ image, title, body }) => (
  <div className="type">
    <img src={image} />
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);
