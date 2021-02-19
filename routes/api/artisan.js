const express = require('express');
const router = express.Router();
const Artisan = require('../../models/Artisan');
const User = require('../../models/User');
const auth = require('../../middlewares/auth');
const { body, validationResult } = require('express-validator');

// @route    GET  api/artisan/me
// @desc     get current user profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const myProfile = await Artisan.findOne({
      user: req.user.id,
    }).populate('user', ['avatar', 'name', 'email', 'role', 'job', 'phone']);
    if (!myProfile) {
      res.status(400).json({ message: 'There is no profile for this user' });
    }
    res.json(myProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
});

// @route    POST  api/artisan
// @desc     Post/update artisan profile
// @access   Private
router.post(
  '/',
  [
    auth,

    body('street', 'Street is required').not().isEmpty(),
    body('zipcode', 'Zipcode is required').not().isEmpty(),
    body('city', 'City is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { street, zipcode, city, bio, equipment } = req.body;

    //Build person object
    const artisanFields = {};
    artisanFields.user = req.user.id;

    if (street) artisanFields.street = street;
    if (zipcode) artisanFields.zipcode = zipcode;
    if (city) artisanFields.city = city;
    if (bio) artisanFields.bio = bio;
    if (equipment) artisanFields.equipment = equipment;

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

      //create profile it deosn't exist
      artisan = new Artisan(artisanFields);
      await artisan.save();
      res.json(artisan);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    get  api/artisan
// @desc     get all artisan's profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.find().populate('user', [
      'avatar',
      'name',
      'email',
      'role',
      'job',
      'phone',
    ]);
    res.json(artisans);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    get  api/artisan/:artisan_id
// @desc     get specific artisan'sprofile
// @access   Public
router.get('/:user_id', async (req, res) => {
  try {
    const artisan = await Artisan.findOne({
      user: req.params.user_id,
    }).populate('user', ['avatar', 'name', 'email', 'role', 'job', 'phone']);

    if (!artisan) res.status(400).json({ message: 'Profile not found' });

    res.json(artisan);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      res.status(400).json({ message: 'Profile not found' });
    }
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE  api/artisan/
// @desc     Delete artisan's profile and user
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    //deleting artisan's profile
    await Artisan.findOneAndRemove({ user: req.user.id });
    //deleting user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ message: 'User successfullyu deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route    POST  api/artisan/evaluate
// @desc     Evaluate an artisan
// @access   Private
router.post('/evaluate/:user_profile_id', auth, async (req, res) => {
  try {
    const { rateValue } = req.body;
    const artisan = await Artisan.findOne({ user: req.params.user_profile_id });

    // Check if artisan not found
    if (!artisan) res.status(400).json({ message: 'Profile not found' });

    // Check if user evaluate artisan

    if (!artisan.rate.filter((rate) => rate.user === req.user.id).length > 0) {
      artisan.rate.unshift({ user: req.user.id, value: rateValue });
      await artisan.save();
      return res.json(artisan.rate);
    }
    {
      user = req.params.evaluator;
    }
    artisan.rate.findOneAndUpdate(
      { user: req.user.id },
      { $set: { value: rateValue } },
      { new: false }
    );
    return res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
