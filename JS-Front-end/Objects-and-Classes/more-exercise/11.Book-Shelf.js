function library(arr) {
  let shelfMap = {};
  let booksMap = {};

  for (const line of arr) {
    if (line.includes("->")) {
      let [id, genre] = line.split(" -> ");
      if (!shelfMap[id]) {
        shelfMap[id] = genre;
        booksMap[genre] = [];
      }
    } else if (line.includes(":")) {
      let [title, bookInfo] = line.split(": ");
      let [author, bookGenre] = bookInfo.split(", ");

      if (booksMap[bookGenre]) {
        let book = { title, author };
        booksMap[bookGenre].push(book);
      }
    }
  }

  let sortedShelves = Object.fromEntries(
    Object.entries(booksMap).sort((a, b) => {
      let [_genreA, booksA] = a;
      let [_genreB, booksB] = b;

      return booksB.length - booksA.length;
    })
  );

  for (const [genre, books] of Object.entries(sortedShelves)) {
    let id = Object.entries(shelfMap).find(([id, g]) => g === genre)[0];

    console.log(`${id} ${genre}: ${books.length}`);

    let sortedBooks = books.sort((bookA, bookB) =>
      bookA.title.localeCompare(bookB.title)
    );

    for (const book of sortedBooks) {
      console.log(`--> ${book.title}: ${book.author}`);
    }
  }
}

library([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);

library([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);
