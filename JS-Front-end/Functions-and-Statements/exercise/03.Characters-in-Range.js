function carRangeFinder(char1, char2) {
  let char1Code = char1.charCodeAt(0);
  let char2Code = char2.charCodeAt(0);
  let charRange = [];
  if (char1Code < char2Code) {
    for (let i = char1Code + 1; i < char2Code; i++) {
      const char = String.fromCharCode(i);
      charRange.push(char);
    }
  } else {
    for (let i = char1Code - 1; i > char2Code; i--) {
      const char = String.fromCharCode(i);
      charRange.unshift(char);
    }
  }

  console.log(charRange.join(" "));
}

carRangeFinder("a", "d");
carRangeFinder("#", ":");
carRangeFinder("C", "#");
