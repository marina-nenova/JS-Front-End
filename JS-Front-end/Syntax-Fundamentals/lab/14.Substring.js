function solve(text, start, count) {
  let substring = text.substring(start, start + count);
  console.log(substring);
}

solve("ASentence", 1, 8);
solve("SkipWord", 4, 7);
