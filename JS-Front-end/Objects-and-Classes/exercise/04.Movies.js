function movies(moviesList) {
  let moviesArr = {};

  for (const command of moviesList) {
    if (command.includes("addMovie")) {
      let movieName = command.split("addMovie ")[1];
      moviesArr[movieName] = {};
      moviesArr[movieName].name = movieName;
    } else if (command.includes("directedBy")) {
      let [movieName, directorName] = command.split(" directedBy ");
      if (movieName in moviesArr) {
        moviesArr[movieName].director = directorName;
      }
    } else if (command.includes("onDate")) {
      let [movieName, movieDate] = command.split(" onDate ");
      if (movieName in moviesArr) {
        moviesArr[movieName].date = movieDate;
      }
    }
  }
  for (let [key, value] of Object.entries(moviesArr)) {
    if (Object.keys(moviesArr[key]).length === 3) {
      console.log(JSON.stringify(value));
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
