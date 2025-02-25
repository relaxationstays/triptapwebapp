import React from "react";
// import { RFValue } from "react-native-responsive-fontsize";

const ThemedText = ({ children, className, style, ...props }) => {
  const defaultStyle = {
    color: "#000", // Default text color
    fontSize: 16, // Default font size using RFValue
  };
  return (
    <span
      className={className}
      style={{ ...defaultStyle, ...style }}
      {...props}
    >
      {children}
    </span>
  );
};

export default ThemedText;
