function oddOccurances(words) {
  let wordsArr = words.split(" ").map((word) => word.toLowerCase());
  let wordsCount = {};

  for (const word of wordsArr) {
    if (!wordsCount[word]) {
      wordsCount[word] = 1;
    } else {
      wordsCount[word]++;
    }
  }

  let result = [];
  for (const key in wordsCount) {
    if (wordsCount[key] % 2 !== 0) {
      result.push(key);
    }
  }

  console.log(result.join(" "));
}

oddOccurances("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurances("Cake IS SWEET is Soft CAKE sweet Food");
