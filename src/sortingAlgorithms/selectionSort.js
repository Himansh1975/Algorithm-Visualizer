const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const selectionSort = async (array, setArray) => {
  const sortedArray = [...array];
  const n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (sortedArray[j] < sortedArray[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = sortedArray[i];
      sortedArray[i] = sortedArray[minIndex];
      sortedArray[minIndex] = temp;
      setArray([...sortedArray]);
      await sleep(100);
    }
  }
};

export default selectionSort;
