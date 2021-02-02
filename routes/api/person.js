const express = require("express");
const router = express.Router();
const Person = require("../../models/Person");
const User = require("../../models/User");
const auth = require("../../middlewares/auth");
// const { body, validationResult } = require("express-validator");
const config = require("config");

// @route    GET  api/profile/me
// @desc     Get current person's profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const myProfile = await Person.findOne({
      user: req.user.id,
    }).populate("user", ["avatar", "name"]);
    if (!myProfile) {
      res.status(400).json({ message: "There is no profile for this user" });
    }
    res.json(myProfile);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//@route    POST api/person
//@desc     Create/update person profile
//@access   Private
router.post("/", auth, async (req, res) => {
  const { street, zipcode, city } = req.body;

  //Build person object
  const personFields = {};
  personFields.user = req.user.id;
  if (street) personFields.street = street;
  if (zipcode) personFields.zipcode = zipcode;
  if (city) personFields.city = city;

  try {
    let person = await Person.findOne({ user: req.user.id });
    console.log(req.user.id);

    //update if person exists
    if (person) {
      person = await Person.findOneAndUpdate(
        { user: req.user.id },
        { $set: personFields },
        { new: false }
      );
      return res.json(person);
    }

    //create profie it deosn't exist
    person = new Person(personFields);
    await person.save();
    res.json(person);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/:user_id
//@desc     get person profile by id
//@access   Private
router.get("/:user_id", auth, async (req, res) => {
  try {
    const person = await Person.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!person) res.status(400).json({ message: "Profile not found" });

    res.json(person);
  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(400).json({ message: "Profile not found" });
    }
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@route    DELETE api/person/
//@desc     delete person profile by id
//@access   Private
router.delete("/", auth, async (req, res) => {
  try {
    //delete person profile
    await Person.findOneAndRemove({ user: req.user.id });

    //delete user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ message: "User Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//@route    GET api/person/
//@desc     Get all users
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const persons = await Person.find().populate("user", ["name", "avatar"]);
    res.json(persons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
