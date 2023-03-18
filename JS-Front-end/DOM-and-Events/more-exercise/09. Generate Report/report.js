function generateReport() {
    let checkboxes = document.querySelectorAll('thead input[type="checkbox"]');
    console.log(checkboxes);
    let cbIndices = [];

    for (let index = 0; index < checkboxes.length; index++) {
        const element = checkboxes[index];
        if (element.checked) {
            cbIndices.push(index);
        }
    }

    let rows = Array.from(document.querySelectorAll('tbody tr'));
    
    let result = [];

    for (const row of rows) {
        let info = {};

        for (const index of cbIndices) {
            let name = checkboxes[index].name;
            let value = row.children[index].textContent;
            info[name] = value;
        }
        result.push(info);
    }

    let report = JSON.stringify(result);

    let outputElement = document.getElementById('output');
    outputElement.textContent = report;
}