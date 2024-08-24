import React from "react";
import "../style/articleCard.css";
import { Link } from "react-router-dom";

export const ArticleCard = ({ image_src, title, body, href }) => (
  <li className="link-card">
    <img src={image_src} alt="" />
    <h2>{title}</h2>
    <p>{body}</p>
    <Link to={href}>Подробнее</Link>
  </li>
);
