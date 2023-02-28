function smallesNumber(...numbers) {
    let sortedNumbers = numbers.sort((a, b) => a-b);
    let smallestNum = sortedNumbers[0];
    console.log(smallestNum);
}

smallesNumber(2, 5, 3);

smallesNumber(600, 342, 123);

smallesNumber(25, 21, 4);
smallesNumber(2, 2, 2);
