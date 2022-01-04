const arrayMathOperation = [100, '+', 22.5, '-', 30, '+', 62];
let result = 0;
let operator = '+';

arrayMathOperation.forEach((item, index) => {
  if (
    //¿Es número?
    !isNaN(item)
  ) {
    switch (operator) {
      case '+':
        result += parseFloat(item);
        break;
      case '-':
        result -= parseFloat(item);
        break;
      default:
        break;
    }
  } else {
    operator = item;
  }

  console.log(`'Iteración ${index + 1}`, parseFloat(item), item);
});
console.log('Resultado: ', result);
