// Solution #1
function twoNumberSum(array, targetSum) {
  const length = array.length;
  for(let i = 0; i < length - 1; i++) {
    const currentNumber = array[i];

    for (let j = i + 1; j < length; j++) {
      const nextNumber = array[j];

      if(currentNumber + nextNumber === targetSum) {
        return [nextNumber, currentNumber];
      }
    }
  }
  return [];
}

// Solution #2


console.log(
  twoNumberSum([3, -1, 5, -4, 8, 11, 1, 6], 10)
);
