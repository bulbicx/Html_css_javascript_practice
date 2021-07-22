let marie = {
  address: "22 avenue rd",
  "favourite colour": "red",
  married: true
};

const paul = {
  address: "178 raden avenue",
  "favourite colour": "green",
  married: false
};

let film = {
  name: "Jurassic Park",
  release: "22-03-1990",
  actors: {
    lucas: {
      gender: "male"
    },
    andrea: {
      gender: "female"
    }
  }
};
console.log("marie favourite colour: ", marie["favourite colour"]);
console.log("film", film);
console.log("film name", film.name);
console.log("film actors", film.actors);
console.log("lucas", film.actors.lucas);

film.name = "new film";
console.log(film.name);
paul.address = "new address";
console.log(paul);