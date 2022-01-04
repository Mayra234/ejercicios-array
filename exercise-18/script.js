let fruits = ['Manzana', 'Coco', 'Pera', 'Mango', 'Piña', 'Melon', 'Limón'];

console.log('Antes de remover: ' + fruits);

const remove = (fruit) => {
  if (fruit == 'Melon' || fruit == 'Coco') {
    return false;
  } else {
    return true;
  }
};

fruits = fruits.filter(remove);
console.log(fruits);
