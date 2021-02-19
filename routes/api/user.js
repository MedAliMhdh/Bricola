const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../../middlewares/auth');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

//@route    POST api/user
//@desc     Register user
//@access   Public

router.post(
  '/',
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body(
    'password',
    'Please enter a password with 8 or more characters'
  ).isLength({ min: 8 }),

  body('role').custom((value, { req }) => {
    if (value === 'Artisan') {
      if (req.body.job === '') {
        throw new Error('Job is required');
      } else {
        return true;
      }
    } else {
      return true;
    }
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role, job, phone } = req.body;

    try {
      //See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      //Get users gravitor
      const avatar = gravatar.url(email, { s: 200, r: 'pg', d: 'mm' });

      user = new User({
        name,
        email,
        avatar,
        password,
        role,
        job,
        phone,
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      console.log(err);
      res.status(500).send('Server error');
    }
  }
);

//@route    PUT api/user/update
//@desc     Update user
//@access   Public

router.put('/update', auth, async (req, res) => {
  const { avatar, name, job, phone } = req.body;
  console.log(req.user._id, 'email');
  const userFields = {};
  userFields.email = req.user.email;

  if (avatar) userFields.avatar = avatar;
  if (name) userFields.name = name;
  if (job) userFields.job = job;
  if (phone) userFields.phone = phone;
  try {
    //See if user not exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'User not exists' }] });
    }

    user = await User.findOneAndUpdate(
      { email: email },
      { $set: userFields },
      { new: false }
    );
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
