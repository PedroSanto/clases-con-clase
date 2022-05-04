// crear la clase Banda aquí
class Banda {
  miembros: string[];
  albumes: { title: string; songs: string[] }[];
  // albums: objetc[] es valido
  constructor(members: string[], albums: { title: string; songs: string[] }[]) {
    this.miembros = members;
    this.albumes = albums;
  }
  getFirstAlbum() {
    return this.albumes[0];
  }

  getAllAlbums() {
    return this.albumes;
  }

  getAllMembers() {
    return this.miembros;
  }

  getRandomSong(albumTitle: string) {
    const result = this.albumes.find((element) => {
      return element.title == albumTitle;
    });
    const cancionADevolver: string =
      result.songs[Math.floor(Math.random() * 2)];
    return cancionADevolver;
  }
}
// no modificar este test
function testClaseBanda() {
  const members = ["dana", "pau"];
  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };
  const banda = new Banda(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  const firstAlbum = banda.getFirstAlbum();
  const allMembers = banda.getAllMembers();
  const randomSongAlbum1 = banda.getRandomSong("album 1");

  if (
    firstAlbum.title == fa.title &&
    fa.songs.length == firstAlbum.songs.length &&
    JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
    fa.songs.includes(randomSongAlbum1)
  ) {
    console.log("testClaseBanda passed");
  } else {
    throw "testClaseBanda not passed";
  }
}

function main() {
  testClaseBanda();
  console.log("vino otra persona y le metio este cambio");
}

main();
