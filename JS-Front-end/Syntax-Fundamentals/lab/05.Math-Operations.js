function solve(n, m, operator) {
    let result;
    if (operator === '+') {
        result = n + m;
    } else if (operator === '-'){
        result = n - m;
    } else if (operator === '*') {
        result = n * m; 
    } else if (operator === '/') {
        result = n / m;
    } else if (operator === '%') {
        result = n % m;
    } else if (operator === '**') {
        result = n ** m;
    }
    console.log(result);
};

solve(5, 6, '+');
solve(17, 35, '*');
solve(18, 11, '*');
solve(18, 11, '/');
solve(1000000, 10, '**');
