const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const bubbleSort = async (originalArray, setArray) => {
  const array = [...originalArray];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap elements
        setArray([...array]);
        await sleep(1); // Introduce a small delay
      }
    }
  }
};

export default bubbleSort;
