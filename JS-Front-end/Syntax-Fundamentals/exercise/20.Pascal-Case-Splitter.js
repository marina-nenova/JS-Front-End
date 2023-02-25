function solve(text) {
  let textArr = text.split("");
  let word = textArr.shift();
  let result = [];
  while (textArr.length > 0) {
    let currentChar = textArr.shift();
    if (currentChar == currentChar.toUpperCase()) {
      result.push(word);
      word = currentChar;
    } else {
      word += currentChar;
    }
  }
  result.push(word);
  console.log(result.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
solve("HoldTheDoor");
solve("ThisIsSoAnnoyingToDo");
