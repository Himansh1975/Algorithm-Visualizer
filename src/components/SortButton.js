import React from "react";
import "./SortButton.css";

const SortButton = ({ onClick, disabled }) => {
  return (
    <button className={`sort-button ${disabled ? "disabled" : ""}`} onClick={onClick} disabled={disabled}>
      Sort
    </button>
  );
};

export default SortButton;
