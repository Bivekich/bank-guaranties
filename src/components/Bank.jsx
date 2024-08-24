import React from "react";
import "../style/bank.css";

export const Bank = ({ image, body }) => (
  <div class="bank-item">
    <img src={image} />
    <p>{body}</p>
  </div>
);
export default Bank;
