function solve(nameArr) {
  let sortedArr = nameArr.sort((aName, bName) => aName.localeCompare(bName));

  for (let i = 0; i < sortedArr.length; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`);
  }
}

solve(["John", "Bob", "Christina", "Ema"]);
