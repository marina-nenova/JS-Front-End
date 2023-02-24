function solve(numArr) {
  let sortedArr = numArr.sort((a, b) => a - b);
  let newArr = [];
  while (sortedArr.length > 0) {
    newArr.push(sortedArr.shift());
    newArr.push(sortedArr.pop());
  }
  return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
