function colorize() {
    let tergetElements = document.querySelectorAll('tr:nth-of-type(2n)');
    
    Array.from(tergetElements).forEach(element => {
        element.style.backgroundColor = 'teal';
    });
}