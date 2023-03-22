function loadRepos() {
	let usernameInput = document.getElementById('username').value; 
	let resposList = document.getElementById('repos');
	resposList.innerHTML = '';
	fetch(`https://api.github.com/users/${usernameInput}/repos`)
	.then(res => res.json())
	.then(result => result.forEach(repo => {
		let reposItem = document.createElement('li');
		let repoLink = document.createElement('a');
		repoLink.textContent = repo.full_name;
		repoLink.href = repo.html_url;

		reposItem.appendChild(repoLink);
		resposList.appendChild(reposItem);
	}))
	.catch(err => console.log(err))
}