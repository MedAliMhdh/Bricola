const express = require("express");
const router = express.Router();
const Person = require("../../models/Person");

router.post("/", (req, res) => {
  res.json("Perons page");
});

module.exports = router;
