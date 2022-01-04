const arrayNumbers = [2, 8, 4, 82, 15];
let result = 0;
let sum = 0;

arrayNumbers.forEach((number) => {
  sum += number;
  result = sum / arrayNumbers.length;
});
console.log(result);
