function findMaxNumber(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(findMaxNumber([1, 5, 2, 9, 3]));
console.log(findMaxNumber([-10, -5, -2, -1]));
console.log(findMaxNumber([100]));
