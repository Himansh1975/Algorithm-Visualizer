import React, { useState } from "react";
import GenerateArrayButton from "./GenerateArrayButton";
import SortingAlgorithmSelector from "./SortingAlgorithmSelector";
import SortButton from "./SortButton";
import "../styles/AlgorithmVisualizer.css";
import bubbleSort from "../sortingAlgorithms/bubbleSort";
import selectionSort from "../sortingAlgorithms/selectionSort";

const AlgorithmVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [selectedAlgorithmIndex, setSelectedAlgorithmIndex] = useState(0);

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
    setSelectedAlgorithmIndex(parseInt(event.target.value));
  };

  const sort = async () => {
    if (selectedAlgorithmIndex !== null && !sortingInProgress) {
      setSortingInProgress(true);

      try {
        await sortingAlgorithms[selectedAlgorithmIndex].sortFunction(
          array,
          setArray
        );
      } catch (error) {
        console.error("Sorting cancelled:", error);
      }

      setSortingInProgress(false);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Algorithm Visualizer</h1>
      <div className="controls">
        <GenerateArrayButton
          onClick={generateRandomArray}
          disabled={sortingInProgress}
        />
        <SortingAlgorithmSelector
          sortingAlgorithms={sortingAlgorithms}
          selectedAlgorithmIndex={selectedAlgorithmIndex}
          onChange={handleAlgorithmChange}
        />
        <SortButton
          className="sort-button"
          onClick={sort}
          disabled={sortingInProgress}
        >
          Sort
        </SortButton>
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
