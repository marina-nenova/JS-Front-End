function softuniStudents(arr) {
  let students = {};
  let courses = {};

  for (const line of arr) {
    if (line.includes(":")) {
      let [courseName, capacity] = line.split(": ");
      if (!courses[courseName]) {
        courses[courseName] = 0;
        students[courseName] = [];
      }

      courses[courseName] += Number(capacity);
    } else {
      let [userInfo, _w, _e, email, _j, course] = line.split(" ");
      let [user, credits] = userInfo.split("[");
      credits = credits.split("]")[0];
      addStudent(course, user, email, Number(credits));
    }
  }

  function addStudent(course, username, email, credits) {
    if (courses.hasOwnProperty(course) && courses[course] > 0) {
      let student = { username, email, credits };
      students[course].push(student);
      courses[course]--;
    }
  }
  let sortedCourses = Object.fromEntries(
    Object.entries(students).sort((courseA, courseB) => {
      let [a, studentsA] = courseA;
      let [b, studentsB] = courseB;

      return studentsB.length - studentsA.length;
    })
  );

  for (const [course, students] of Object.entries(sortedCourses)) {
    console.log(`${course}: ${courses[course]} places left`);

    let sortedStudents = students.sort((stA, stB) => stB.credits - stA.credits);
    for (const { username, email, credits } of sortedStudents) {
      console.log(`--- ${credits}: ${username}, ${email}`);
    }
  }
}

softuniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);

softuniStudents([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);
