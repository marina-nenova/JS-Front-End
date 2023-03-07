function songList([number, ...songs]) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let searchedType = songs.pop();
  let songsList = [];

  for (const song of songs) {
    let [type, name, time] = song.split("_");
    songsList.push(new Song(type, name, time));
  }

  for (const song of songsList) {
    if (searchedType === "all") {
      console.log(song.name);
    } else if (song.type === searchedType) {
      console.log(song.name);
    }
  }
}

songList([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

songList([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);

songList([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
