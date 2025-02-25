import React from "react";
import "./FlipCard.css";
import { FaInfoCircle } from "react-icons/fa";
import ThemedText from "../../ThemedText/ThemedText";
import { IoToggleOutline } from "react-icons/io5";
import { BsToggleOn } from "react-icons/bs";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const FlipCard = ({ bg, index, promo, label, descp }) => {
  const text = label;
  return (
    <div
      className="flip-card"
      style={index == 1 || index == 2 ? { height: 300 } : { height: 250 }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={bg} alt="Background" className="card-image" />
          <div className="icon bottom-right">
            <span style={{ fontWeight: "bold" }}>{promo}</span>
            <div>
              <LuCircleArrowOutUpRight size={30} />
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-text">
            <h3>
              {text.split(" ").map((word, index) => (
                <span key={index} style={{ textTransform: "capitalize" }}>
                  {word}
                  <br />
                </span>
              ))}
            </h3>
            <p align="left">{descp}</p>
          </div>
          <BsToggleOn size={40} className="icon top-right" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
