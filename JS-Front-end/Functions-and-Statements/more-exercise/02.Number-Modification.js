function numberModifier(number) {
    let numAsArr = number.toString().split('');
    let averageSum = average(numAsArr);
    while (averageSum < 5) {
        numAsArr.push('9')
        averageSum = average(numAsArr);
    }
    function average(numsArr) {
        let sum = 0;
        numsArr.forEach(digit => {
            sum += Number(digit)
        });
        return sum / numAsArr.length
    }
    
    console.log(numAsArr.join(''));
}

numberModifier(101);
numberModifier(5835);