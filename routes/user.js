const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ error: 'User already exists' });
  }
});

router.post('/login', async (req, res) => {
 
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send({ error: 'Invalid credentials' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).send({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '5h' });
  console.log("login works")
  res.send({ token });
});
router.get('/me', async (req, res)=> {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
     console.log(decoded)
    const user = await User.findById(decoded.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
});
module.exports = router;