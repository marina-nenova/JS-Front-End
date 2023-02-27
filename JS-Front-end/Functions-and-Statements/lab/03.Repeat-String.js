function solve(word, count) {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += word
    }
    return result
}


console.log(solve("abc", 3));
console.log(solve("String", 2));