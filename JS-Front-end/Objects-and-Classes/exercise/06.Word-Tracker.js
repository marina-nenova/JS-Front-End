function wordsTracker(wordsArr) {
  let searchedWords = wordsArr.shift().split(" ");
  let result = {};
  for (const searchedWord of searchedWords) {
    let occurances = result[searchedWord] = wordsArr.filter((w) => w === searchedWord).length;
    result[searchedWord] = occurances;
  }
  
    const sorted = Object.fromEntries(
    Object.entries(result).sort(([, a], [, b]) => b - a)
  );
  
  for (const [word, count] of Object.entries(sorted)) {
    console.log(`${word} - ${count}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
