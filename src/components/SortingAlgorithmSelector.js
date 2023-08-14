import React from "react";
import "./SortingAlgorithmSelector.css";

const SortingAlgorithmSelector = ({ sortingAlgorithms, selectedAlgorithmIndex, onChange }) => {
  return (
    <select className="sorting-algorithm-selector" onChange={onChange}>
      <option value={null}>Select Sorting Algorithm</option>
      {sortingAlgorithms.map((algorithm, index) => (
        <option key={index} value={index}>
          {algorithm.name}
        </option>
      ))}
    </select>
  );
};

export default SortingAlgorithmSelector;
