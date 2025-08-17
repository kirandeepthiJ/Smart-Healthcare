import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardOption.css";

function CardOption({ title, image, path }) {
  const navigate = useNavigate();

  return (
    <div className="card-option" onClick={() => navigate(path)}>
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
    </div>
  );
}

export default CardOption;