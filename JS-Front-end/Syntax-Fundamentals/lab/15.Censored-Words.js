function solve(text, searchedWord) {
  while (text.includes(searchedWord)) {
    text = text.replace(searchedWord, "*".repeat(searchedWord.length));
  }
  console.log(text);
}

solve("A small sentence with some words small", "small");
solve("Find the hidden word", "hidden");
