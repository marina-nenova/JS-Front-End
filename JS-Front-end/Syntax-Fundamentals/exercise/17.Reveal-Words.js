function solve(searchedWords, text) {
  let wordsArr = searchedWords.split(", ");
  let textArr = text.split(" ");

  for (let i = 0; i < textArr.length; i++) {
    const textWord = textArr[i];
    for (const word of wordsArr) {
      if (
        textArr[i].includes("*".repeat(word.length)) &&
        textArr[i].length === word.length
      ) {
        textArr[i] = word;
      }
    }
  }
  console.log(textArr.join(" "));
}

solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
