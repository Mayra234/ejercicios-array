let sum = '100+22.5+62';
sum.split([' ']);
console.log(sum);

const mathOperation = '100 + 22.5 + 30 + 62';
let arrayMathOperation = mathOperation.split(' ');
let result = 0;

arrayMathOperation.forEach((number) => {
  //1. number => 100
  //2. number => +
  //3. number => 22.5
  //4. number => +
  //5. number => 30
  //6. number => +
  //7. number => 62
  if (
    // ¿Es un número?
    !isNaN(number)
  ) {
    //1. entra 100
    //3. entra 22.5
    //5. entra 30
    //7. entra 62
    result += parseFloat(number);
  }
  //2. entra +
  //4. entra +
  //6. entra +
});
console.log(result);
