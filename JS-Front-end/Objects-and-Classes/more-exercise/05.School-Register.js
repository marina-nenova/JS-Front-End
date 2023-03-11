function schoolregister(info) {
  let register = {};

  for (const line of info) {
    let [nameInfo, gradeInfo, scoreInfo] = line.split(", ");
    let name = nameInfo.split(": ")[1];
    let grade = Number(gradeInfo.split(": ")[1]);
    let score = Number(scoreInfo.split(": ")[1]);

    if (!register[grade] && score >= 3) {
      register[grade] = { students: [], score: [] };
    }
    if (score >= 3) {
      register[grade].students.push(name);
      register[grade].score.push(score);
    }
  }

  for (const key in register) {
    let sumGrades = register[key].score.reduce((a, b) => a + b, 0);
    let avgScore = sumGrades / register[key].score.length;
    console.log(`${Number(key) + 1} Grade`);
    console.log(`List of students: ${register[key].students.join(", ")}`);
    console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
    console.log();
  }
}

// schoolregister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//         "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//         "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//         "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//         "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//         "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//         "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//         "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//         "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//         "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ]
//     )

schoolregister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
