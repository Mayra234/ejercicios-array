const number = parseFloat(prompt('Digite un número'));
const colors = ['Azul', 'Verde', 'Amarillo', 'Negro'];

switch (number) {
  case 1:
    console.log(colors[0]);
    break;
  case 2:
    console.log(colors[1]);
    break;
  case 3:
    console.log(colors[2]);
    break;
  case 4:
    console.log(colors[3]);
    break;
  default:
    console.log('No se ha definido un color para ese número');
    break;
}
