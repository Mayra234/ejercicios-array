const product = prompt('Escribe un producto del mercado');
let products = ['carne', 'papas', 'queso', 'jamón', 'panela'];

if (products.includes(product)) {
  console.log('El producto ya se encuentra ingresado');
} else {
  console.log('El producto no se encuentra ingresado');
}
