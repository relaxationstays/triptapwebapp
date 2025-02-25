import React from "react";
import PropTypes from "prop-types";
import { centerDiv } from "../../styles/Format";
import { MdHeight } from "react-icons/md";

// import "./ThemedInput.css"; // Assuming you have some CSS for styling

const ThemedInput = ({ label, type, value, onChange, placeholder, style }) => {
  const defaultStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 1,
  };
  return (
    <div className="themed-input" style={{ ...style, ...defaultStyle }}>
      {label && <label className="themed-input__label">{label}</label>}
      <input
        className="themed-input__input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "90%",
          padding: 10,
          background: "none",
          border: "none",
        }}
      />
    </div>
  );
};

ThemedInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

ThemedInput.defaultProps = {
  type: "text",
  placeholder: "",
};

export default ThemedInput;
