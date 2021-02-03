const express = require("express");
const router = express.Router();
const Artisan = require("../../models/Artisan");
const User = require("../../models/User");
const auth = require("../../middlewares/auth");
const { body, validationResult } = require("express-validator");

// @route    GET  api/Artisan/me
// @desc     get current user profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const myProfile = await Artisan.findOne({
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

// @route    POST  api/Artisan
// @desc     Post/update artisan profile
// @access   Private
router.post(
  "/",
  [
    auth,
    body("profession", "Profession is required").not().isEmpty(),
    body("street", "Street is required").not().isEmpty(),
    body("zipcode", "Zipcode is required").not().isEmpty(),
    body("city", "City is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { profession, street, zipcode, city, bio } = req.body;

    //Build person object
    const artisanFields = {};
    artisanFields.user = req.user.id;
    if (profession) artisanFields.profession = profession;
    if (street) artisanFields.street = street;
    if (zipcode) artisanFields.zipcode = zipcode;
    if (city) artisanFields.city = city;
    if (bio) artisanFields.bio = bio;

    try {
      let artisan = await Artisan.findOne({ user: req.user.id });

      //update if person exists
      if (artisan) {
        artisan = await Artisan.findOneAndUpdate(
          { user: req.user.id },
          { $set: artisanFields },
          { new: false }
        );
        return res.json(artisan);
      }

      //create profie it deosn't exist
      artisan = new Artisan(artisanFields);
      await artisan.save();
      res.json(artisan);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    get  api/Artisan
// @desc     get all artisan's profiles
// @access   Public
router.get("/", auth, async (req, res) => {
  try {
    const artisans = await Artisan.find().populate("user", ["avatar", "name"]);
    res.json(artisans);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    get  api/Artisan/:artisan_id
// @desc     get specific artisan'sprofile
// @access   Public
router.get("/:user_id", async (req, res) => {
  try {
    const artisan = await Artisan.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!artisan) res.status(400).json({ message: "Profile not found" });

    res.json(artisan);
  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(400).json({ message: "Profile not found" });
    }
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    delete  api/artisan/
// @desc     delete artisan's profile and user
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    //deleting artisan's profile
    await Artisan.findOneAndRemove({ user: req.user.id });
    //deleting user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ message: "User successfullyu deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
