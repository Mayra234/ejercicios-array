const various = ['lapíz', 5, 'Papas', 4, '4', 'papas', '4', 'lapíz'];
const unique = [];

for (let i = 0; i < various.length; i++) {
  const element = various[i];

  if (!unique.includes(various[i])) {
    unique.push(element);
  }
}
console.log(unique);
