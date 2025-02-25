import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { FaHome } from "react-icons/fa";

const ThemedButton = ({
  onClick,
  children,
  type = "button",
  className,
  style,
  label,
}) => {
  const defaultStyle = {
    color: "#000", // Default text color
    fontSize: 14, // Default font size using RFValue
    borderRadius: 20,
    border: "1px solid lightgrey",
    padding: 8,
    textTransform: "capitalize",
    ...(label && { paddingLeft: "3%" }),
  };
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      style={{ ...defaultStyle, ...style, position: "relative" }}
    >
      {label && (
        <span
          style={{
            position: "absolute",
            left: "5px",
            background: "white",
            padding: 5,
            // fontSize: 15,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 4,
          }}
        >
          {label}
        </span>
      )}
      {children}
    </button>
  );
};

ThemedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  styles: PropTypes.object,
};

export default ThemedButton;
