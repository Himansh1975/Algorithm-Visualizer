import React from "react";
import "../styles/GenerateArrayButton.css";

const GenerateArrayButton = ({ onClick, disabled }) => {
  return (
    <button
      className={`generate-array-button ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      Generate New Array
    </button>
  );
};

export default GenerateArrayButton;
