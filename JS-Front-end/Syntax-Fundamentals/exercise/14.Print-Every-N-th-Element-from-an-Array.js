function solve(arr, step) {
  let result = [];
  for (let i = 0; i < arr.length; i += step) {
    const element = arr[i];
    result.push(element);
  }
  return result;
}

console.log(solve(["5", "20", "31", "4", "20"], 2));
console.log(solve(["dsa", "asd", "test", "tset"], 2));
console.log(solve(["1", "2", "3", "4", "5"], 6));
