const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/connection.js');
require('dotenv').config();
const { User, Plan } = require('./Schema');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Database
connectDB();

//routes
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  try {
    let checkUser = await User.findOne({ email: email });
    if (checkUser) {
      if (password === checkUser.password) {
        res.send({ message: 'User Logged In', Data: checkUser });
      } else {
        res.send({ message: 'Password is wrong', Data: null });
      }
    } else {
      res.send({ message: 'User Not Found', Data: null });
    }
  } catch (error) {
    res.send({ message: 'Error', Data: null });
  }
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let checkUser = await User.findOne({ email: email });
    if (checkUser) {
      res.send({ message: 'User Already Register', Data: null });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      try {
        const promise = await user.save();
        res.send({ message: 'User Register', Data: promise });
      } catch (error) {
        res.send({ message: 'User Not Registered', Data: null });
      }
    }
  } catch (error) {
    res.send({ message: 'Error', Data: null });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT: ${PORT}`);
});
