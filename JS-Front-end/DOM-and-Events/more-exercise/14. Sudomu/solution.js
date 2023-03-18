function solve() {

    let firstRow = document.querySelectorAll('tbody tr:nth-of-type(1) td');
    let secondRow = document.querySelectorAll('tbody tr:nth-of-type(2) td');
    let thirdRow = document.querySelectorAll('tbody tr:nth-of-type(3) td');

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    for (const row of rows) {
        let col = [];

        for (let index=0; i < row.children.length; index++) {
            col.push()
        }
        result.push(info);
    }

    let firstCol = [firstRow[0], secondRow[0], thirdRow[0]];
    let secondCol = [firstRow[1], secondRow[1], thirdRow[1]];
    let thirdCol = [firstRow[2], secondRow[2], thirdRow[2]];

    console.log(firstCol);
    console.log(secondCol);
    console.log(thirdCol);
    
}
