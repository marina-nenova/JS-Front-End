function sprint(input) {
  let n = Number(input.shift());

  let board = {};

  let commandParser = {
    "Add New": addTask,
    "Change Status": changeStatus,
    "Remove Task": removeTask,
  };

  for (let index = 0; index < n; index++) {
    const [assignee, taskId, title, status, estimatedPoints] = input
      .shift()
      .split(":");
    if (!board.hasOwnProperty(assignee)) {
      board[assignee] = [];
    }

    board[assignee].push({ taskId, title, status, estimatedPoints });
  }

  for (const commandLine of input) {
    let commandTokens = commandLine.split(":");
    let command = commandTokens[0];
    commandParser[command](...commandTokens.slice(1));
  }

  function addTask(assignee, taskId, title, status, estimatedPoints) {
    if (!board.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
    } else {
      board[assignee].push({ taskId, title, status, estimatedPoints });
    }
  }

  function changeStatus(assignee, taskId, newStatus) {
    if (!board.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
    } else {
      let assigneeTasks = board[assignee];
      let task = assigneeTasks.find((t) => t.taskId === taskId);
      if (!task) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
      } else {
        task.status = newStatus;
      }
    }
  }

  function removeTask(assignee, index) {
    if (!board.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
    } else {
      let assigneeTasks = board[assignee];
      if (index >= assigneeTasks.length || index < 0) {
        console.log("Index is out of range!");
      } else {
        assigneeTasks.splice(index, 1);
      }
    }
  }

  let allTasks = Object.values(board).flat();

  let todoPoints = 0;
  let inProgressPoints = 0;
  let codeReviewPoints = 0;
  let donePoints = 0;

  for (const task of allTasks) {
    if (task.status === "ToDo") {
      todoPoints += Number(task.estimatedPoints);
    } else if (task.status === "In Progress") {
      inProgressPoints += Number(task.estimatedPoints);
    } else if (task.status === "Code Review") {
      codeReviewPoints += Number(task.estimatedPoints);
    } else if (task.status === "Done") {
      donePoints += Number(task.estimatedPoints);
    }
  }

  console.log(`ToDo: ${todoPoints}pts`);
  console.log(`In Progress: ${inProgressPoints}pts`);
  console.log(`Code Review: ${codeReviewPoints}pts`);
  console.log(`Done Points: ${donePoints}pts`);

  let otherPointsSum = inProgressPoints + todoPoints + codeReviewPoints;

  if (donePoints >= otherPointsSum) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}

// sprint(    [
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ]

// )

sprint([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
