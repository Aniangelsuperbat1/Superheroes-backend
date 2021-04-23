const mongoose = require("../database/connection");

const VillainSchema = new mongoose.Schema({
  name: String,
  alterEgo: String,
  Home: String,
  Powers: [String],
  wiki: String,
  photo: String,
  archNemesis: String
});

const Villain = mongoose.model("Superhero", VillainSchema);
module.exports = Villain;
