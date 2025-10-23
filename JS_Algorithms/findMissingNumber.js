function findMissingNumber(numbers) {
  const n = numbers.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 1, 4, 6, 2]));
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 1]));
