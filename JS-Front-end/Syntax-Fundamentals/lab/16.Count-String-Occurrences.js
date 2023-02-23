function solve(sentence, searchedWord) {
  let count = 0;
  let wordArr = sentence.split(" ");
  for (const word of wordArr) {
    if (word === searchedWord) {
      count++;
    }
  }
  console.log(count);
}

solve("This is a word and it also is a sentence", "is");
solve(
  "softuni is great place for learning new programming languages",
  "softuni"
);
