import React from "react";
import "../styles/SortingAlgorithmSelector.css";

const SortingAlgorithmSelector = ({ sortingAlgorithms, selectedAlgorithmIndex, onChange }) => {
  return (
    <select className="sorting-algorithm-selector" onChange={onChange}>
      {sortingAlgorithms.map((algorithm, index) => (
        <option key={index} value={index}>
          {algorithm.name}
        </option>
      ))}
    </select>
  );
};

export default SortingAlgorithmSelector;
