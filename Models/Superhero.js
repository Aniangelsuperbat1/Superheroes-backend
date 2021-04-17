const mongoose = require("../database/connection");

const SuperheroSchema = new mongoose.Schema({
    name: String,
    alterEgo: String,
    Home: String,
    Powers: [String],
    wiki: String,
    photo: String
})

const Superhero = mongoose.model("Superhero", SuperheroSchema)
module.exports = Superhero