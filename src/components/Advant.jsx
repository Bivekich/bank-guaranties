import React from "react";
import "../style/advant.css";

export const Advant = ({ image, body }) => (
  <div className="advant">
    <div className="advant-type">
      <img src={image} />
      <p>{body}</p>
    </div>
  </div>
);
