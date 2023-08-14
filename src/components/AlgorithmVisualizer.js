import React, { useState } from "react";
import GenerateArrayButton from "./GenerateArrayButton";
import SortingAlgorithmSelector from "./SortingAlgorithmSelector";
import SortButton from "./SortButton";
import "./AlgorithmVisualizer.css";
import bubbleSort from "../sortingAlgorithms/bubbleSort";
import ResetButton from "./ResetButton";
import selectionSort from "../sortingAlgorithms/selectionSort";

const AlgorithmVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [selectedAlgorithmIndex, setSelectedAlgorithmIndex] = useState(null);
  const [isCancelling, setIsCancelling] = useState(false); 

  const sortingAlgorithms = [
    { name: "Bubble Sort", sortFunction: bubbleSort },
    { name: "Selection Sort", sortFunction: selectionSort },
  ];

  const generateRandomArray = () => {
    const newArray = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
  };

  const handleAlgorithmChange = (event) => {
    const selectedAlgorithmIndex = parseInt(event.target.value);
    setSelectedAlgorithmIndex(selectedAlgorithmIndex);
  };

  const sort = async () => {
    if (selectedAlgorithmIndex !== null && !sortingInProgress) {
      setSortingInProgress(true);
      setIsCancelling(false); 
      await sortingAlgorithms[selectedAlgorithmIndex].sortFunction(array, setArray);
      handleSortingComplete();
    }
  };

  const reset = () => {
    if (sortingInProgress) {
      setIsCancelling(true); 
    } else {
      setArray([]);
      setSelectedAlgorithmIndex(null);
    }
  };

  const handleSortingComplete = () => {
    setSortingInProgress(false);
    setIsCancelling(false); 
  };

  return (
    <div className="container">
      <h1 className="header">Algorithm Visualizer</h1>
      <GenerateArrayButton
        onClick={generateRandomArray}
        disabled={sortingInProgress}
      />
      <div className="controls">
        <SortingAlgorithmSelector
          sortingAlgorithms={sortingAlgorithms}
          selectedAlgorithmIndex={selectedAlgorithmIndex}
          onChange={handleAlgorithmChange}
        />
        <SortButton className="sort-button" onClick={sort} disabled={sortingInProgress}>
          Sort
        </SortButton>
        <ResetButton
          className="reset-button"
          onClick={reset}
          disabled={sortingInProgress}
          isCancelling={isCancelling}
        />
      </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value * 3}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
