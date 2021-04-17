const seed = require("./seed.json");
const superhero = require("../Models/Superhero");

superhero.deleteMany({}).then(() => {
  superhero
    .insertMany(seed)
    .then((superhero) => {
      console.log(superhero);
      process.exit();
    })
    .catch(console.error);
});
