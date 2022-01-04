const mathOperation = '20 + 10 - 55 + 70';
const arrayMathOperation = mathOperation.split(' ');
let result = 0;
let operator = '+';

arrayMathOperation.forEach((item, index) => {
  //1. item => 20   | operator => +
  //2. item => +		| operator => +
  //3. item => 10   | operator => +
  //4. item => -    | operator => +
  //5. item => 55   | operator => -
  //6. item => +    | operator => -
  //7. item => 70   | operator => +

  if (
    //¿Es número?
    !isNaN(item)
  ) {
    switch (operator) {
      case '+':
        result += parseFloat(item);
        //1. 0  = 0 + 20     --> 20
        //3. 10 = 20 + 10    --> 30
        //7.-25 = -25 + 70   --> 45
        break;
      case '-':
        //5. 30 = 30 - 55    --> -25
        result -= parseFloat(item);
        break;
      default:
        break;
    }
  } else {
    // De lo contrario
    //2. item => +
    //4. item => -
    //6, item => +
    operator = item;
  }

  // 1 operator => + Valor inicializado
  // 2 operator => +
  // 3 operator => +
  // 4 operator => -
  // 5 operator => -
  // 6 operator => +

  console.log(`'Iteración ${index + 1}`, parseFloat(item), item);
});
console.log('Resultado: ', result);
