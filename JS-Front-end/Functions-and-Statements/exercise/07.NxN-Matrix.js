function matrixBuilder(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(n);
    }
    matrix.push(row);
  }

  matrix.forEach((row) => console.log(...row));
}

matrixBuilder(3);
matrixBuilder(7);
