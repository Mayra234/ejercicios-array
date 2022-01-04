const fullNames = [
  ['Jim', 'Carrey'],
  ['Chris', 'Graham'],
  ['David', 'Gotham'],
  ['Bob', 'Ross'],
  ['Arnold', 'Ford'],
  ['Kara', 'Roland'],
];

let name = fullNames.join('\n');
console.log(name.replace(/,/g, ' '));
