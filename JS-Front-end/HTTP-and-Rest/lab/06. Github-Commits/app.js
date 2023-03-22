function loadCommits() {
  let username = document.getElementById("username").value;
  let repo = document.getElementById("repo").value;
  let listItems = document.getElementById("commits");
  listItems.innerHTML = "";

  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((result) => result.json())
    .then((res) => {
        res.forEach((commitRes) => {
        let item = document.createElement("li");
        item.textContent = `${commitRes.commit.author.name}: ${commitRes.commit.message}`;
        listItems.appendChild(item);
      });
    })
    .catch((err) => {
      console.error(err)
      let item = document.createElement("li");
      item.textContent = `Error: ${console.error(err)} (Not Found)`;
      listItems.appendChild(item);
    });
}
