const express = require("express");
const superhero = require("../Models/Superhero")
const router = express.Router();

router.get("/", (req, res, next) =>{
    superhero.find({}).then((hero) => {
        res.json(hero)
    }).catch(next)
})

module.exports = router