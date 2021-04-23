const express = require("express");
const villain = require("../Models/Villain");
const router = express.Router();

router.get("/villains", (req, res, next) => {
  villain
    .find({})
    .then((villain) => {
      res.json(villain);
    })
    .catch(next);
});

module.exports = router;
