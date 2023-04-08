window.addEventListener("load", solve);

function solve() {
  let inputDomElements = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    label: document.getElementById("label"),
    points: document.getElementById("points"),
    assignee: document.getElementById("assignee"),
  };

  let taskId = document.getElementById("task-id");

  let createTaskBtn = document.getElementById("create-task-btn");
  let deleteTaskBtn = document.getElementById("delete-task-btn");

  let tasksSection = document.getElementById("tasks-section");
  let totalPointsElement = document.getElementById("total-sprint-points");

  createTaskBtn.addEventListener("click", createTask);
  deleteTaskBtn.addEventListener("click", deleteTask);
  let iconsMapper = {
    "Feature": "&#8865",
    "Low Priority Bug": "&#9737",
    "High Priority Bug": "&#9888",
  };

  let classMapper = {
    "Feature": "feature",
    "Low Priority Bug": "low-priority",
    "High Priority Bug": "high-priority",
  };

  let count = 1;
  let totalPoints = 0;

  function createTask(e) {
    let title = inputDomElements.title.value;
    let description = inputDomElements.description.value;
    let label = inputDomElements.label.value;
    let points = inputDomElements.points.value;
    let assignee = inputDomElements.assignee.value;

    let currentTask = { title, description, label, points, assignee };

    const allFormInputs = Object.values(inputDomElements).every(
      (input) => input.value.trim() !== ""
    );

    if (allFormInputs) {
      let article = createElement(
        "article",
        tasksSection,
        null,
        ["task-card"],
        `task-${count}`
      );
      createElement(
        "div",
        article,
        `${label} ${iconsMapper[label]}`,
        ["task-card-label", `${classMapper[label]}`],
        null,
        null,
        true
      );
      createElement("h3", article, title, ["task-card-title"]);
      createElement("p", article, description, ["task-card-description"]);
      createElement("div", article, `Estimated at ${points} pts`, [
        "task-card-points",
      ]);
      createElement("div", article, `Assigned to: ${assignee}`, [
        "task-card-assignee",
      ]);
      let actionsElement = createElement("div", article, null, [
        "task-card-actions",
      ]);
      let deleteBtn = createElement("button", actionsElement, "Delete");

      deleteBtn.addEventListener("click", () => {
        taskId.value = article.id;

        for (const key in inputDomElements) {
          inputDomElements[key].value = currentTask[key];
        }

        deleteTaskBtn.disabled = false;
        createTaskBtn.disabled = true;

        Object.values(inputDomElements).forEach(
          (input) => (input.disabled = true)
        );
      });

      count++;
      clearFields();
      calculatePoints(points);
    }
  }

  function deleteTask(e) {
    let taskIdValue = taskId.value;
    let tasksToDelete = tasksSection.querySelector(`#${taskIdValue}`);
    let points = inputDomElements.points.value;
    tasksSection.removeChild(tasksToDelete);
    // tasksToDelete.remove()
    deleteTaskBtn.disabled = true;
    createTaskBtn.disabled = false;

    Object.values(inputDomElements).forEach(
      (input) => (input.disabled = false)
    );

    calculatePoints(-points);
    clearFields();
  }

  function calculatePoints(points) {
    let pointsText = totalPointsElement.textContent.trim().split(" ");
    totalPoints += Number(points);
    pointsText[2] = `${totalPoints}pts`;
    totalPointsElement.textContent = pointsText.join(" ");
  }

  function clearFields() {
    Object.values(inputDomElements).forEach((input) => (input.value = ""));
  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }
      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement[key] = attributes[key];
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
