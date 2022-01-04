const sentence = ['Mi nombre es Juan'];

let text = sentence.toString();
console.log(text);

// solución con expresiones regulares
const sentence = ['My', 'name', 'is', 'Juan'];

let text = sentence.toString();
//My,name,is,juan
text = text.replace(/,/g, ' ');
//My name is juan

console.log(text);

// solucion
const sentence = ['My', 'name', 'is', 'Juan'];
let text = sentence.join(' ');
console.log(text);
