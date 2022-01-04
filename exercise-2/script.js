//Write a JavaScript function to check whether if the given value is an array or not.
function checkIsArray(value) {
  return Array.isArray(value);
}

console.log('Caso donde es array', checkIsArray([1, 2, 3])); //true
console.log('Caso donde no es array', checkIsArray('x')); //false
