let fruits = ['Manzana', 'Pera', 'Mango', 'Piña', 'Melon', 'Limón'];
const remove = (fruit) => {
  if (fruit == 'Melon') {
    return false;
  } else {
    return true;
  }
};
fruits = fruits.filter(remove);
console.log(fruits);
