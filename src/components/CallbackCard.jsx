import React from "react";
import "../style/callbackCard.css";

export const CallbackCard = ({ image_src, title }) => (
  <li className="callback-card">
    <img src={image_src} />
    <span>{title}</span>
  </li>
);
