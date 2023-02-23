function solve(n, array) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.unshift(array[i]);
  }
  console.log(arr.join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
