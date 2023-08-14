import React from "react";
import "./ResetButton.css";

const ResetButton = ({ onClick, disabled, isCancelling }) => {
  return (
    <button
      className={`reset-button ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {isCancelling ? "Cancelling..." : "Cancel"}
    </button>
  );
};

export default ResetButton;
