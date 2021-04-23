const seed = require("./seed.json");
const superhero = require("../Models/Superhero");
const Villain = require("../Models/Villain");
const seed2 = require("./seed2.json");

superhero.deleteMany({}).then(() => {
  superhero
    .insertMany(seed)
    .then((superhero) => {
      console.log(superhero);
      process.exit();
    })
    .catch(console.error);
});

// Villain.insertMany(seed2).then((villain) => {
//   console.log(villain);
//   process.exit;
// });
