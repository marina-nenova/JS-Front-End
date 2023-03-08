function employees(empArr) {
  let employees = {};

  for (const employee of empArr) {
    employees[employee] = employee.length;
  }

  for (const [name, number] of Object.entries(employees)) {
    console.log(`Name: ${name} -- Personal Number: ${number}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
