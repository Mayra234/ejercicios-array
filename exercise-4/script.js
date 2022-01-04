const grid = [
  //c c.c.c
  [0, 0, 0, 0], //r
  [1, 1, 1, 1], //r
  [0, 0, 0, 0], //r
  [1, 1, 1, 1], //r
];

let printedGrid = '';

grid.forEach((row) => {
  let printedRow = '';

  row.forEach((col) => {
    printedRow += col;
  });

  printedGrid += printedRow + '\n';
});

console.log(printedGrid);
