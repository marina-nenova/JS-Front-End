function commentsSort(arr) {
  let articles = {};
  let users = [];

  for (const line of arr) {
    if (line.includes("user")) {
      let username = line.split("user ")[1];
      users.push(username);
    } else if (line.includes("article")) {
      let article = line.split("article ")[1];
      articles[article] = [];
    } else if (line.includes(": ")) {
      let [data, commentInfo] = line.split(": ");
      let [username, article] = data.split(" posts on ");
      let [commentTitle, commentText] = commentInfo.split(", ");
      addComment(username, article, commentTitle, commentText);
    }
  }

  function addComment(user, article, title, content) {
    if (articles[article] && users.includes(user)) {
      let comment = { fromUser: user, title, content };
      articles[article].push(comment);
    }
  }
  let sortedArticles = Object.fromEntries(
    Object.entries(articles).sort((a, b) => {
      let [_articleA, commentsA] = a;
      let [_articleB, commentsB] = b;

      return commentsB.length - commentsA.length;
    })
  );

  for (const [article, comments] of Object.entries(sortedArticles)) {
    console.log(`Comments on ${article}`);

    for (const comment of comments.sort((a, b) =>
      a.fromUser.localeCompare(b.fromUser)
    )) {
      console.log(
        `--- From user ${comment.fromUser}: ${comment.title} - ${comment.content}`
      );
    }
  }
}

commentsSort([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);

commentsSort([
  "user Mark",
  "Mark posts on someArticle: NoTitle, stupidComment",
  "article Bobby",
  "article Steven",
  "user Liam",
  "user Henry",
  "Mark posts on Bobby: Is, I do really like them",
  "Mark posts on Steven: title, Run",
  "someUser posts on Movies: Like",
]);
