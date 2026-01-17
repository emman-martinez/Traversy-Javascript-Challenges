function sumOfEvenSquares(numbers) {
  if (numbers.length === 0) return 0;

  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const square = evenNumbers.map((num) => Math.pow(num, 2));
  const sum = square.reduce((total, num) => total + num);

  return sum;
}

module.exports = sumOfEvenSquares;
