const express = require("express");
const superhero = require("../Models/Superhero")
const router = express.Router();

router.get("/", (req, res, next) =>{
    superhero.find({}).then((hero) => {
        res.json(hero)
    }).catch(next)
})

router.get("/DC/heroes", (req, res, next) => {
  superhero
    .find({status: "hero", universe: "DC"})
    .then((hero) => {
      res.json(hero);
    })
    .catch(next);
});

router.get("/DC/villains", (req, res, next) => {
  superhero
    .find({status: "Villain", universe: "DC"})
    .then((hero) => {
      res.json(hero);
    })
    .catch(next);
});

router.get("/Marvel/heroes", (req, res, next) => {
  superhero
    .find({ status: "hero", universe: "Marvel" })
    .then((hero) => {
      res.json(hero);
    })
    .catch(next);
});

module.exports = router