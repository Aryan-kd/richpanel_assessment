const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/connection.js');
const Stripe = require('stripe');
require('dotenv').config();
const { User, Plan } = require('./Schema');
const url = process.env.CLIENT_URL;

const app = express();
const PORT = process.env.PORT || 4000;
const stripe = Stripe(process.env.STRIPE_KEY);

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Database
connectDB();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader(
  //   'Access-Control-Allow-Origin',

  // );
  // res.setHeader('Access-Control-Allow-Origin', );
  // res.setHeader(
  //   'Access-Control-Allow-Origin',

  // );
  const allowedOrigins = [
    'http://localhost:3000/',
    'https://richpanelapi.onrender.com',
    'https://richpanelaryan.netlify.app/',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

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

app.post('/findplan', async (req, res) => {
  const { name, cycle } = req.body;
  try {
    let planCheck = await Plan.findOne({ Name: name, Cycle: cycle });
    if (planCheck) {
      res.send({ Data: planCheck });
    } else {
      res.send({ Data: 'Not found' });
    }
  } catch (error) {
    res.send({ Data: 'Error' });
  }
});

app.post('/findplanid', async (req, res) => {
  const { id } = req.body;
  try {
    let planCheck = await Plan.findById(id);
    if (planCheck) {
      res.send({ Data: planCheck });
    } else {
      res.send({ Data: 'Not found' });
    }
  } catch (error) {
    res.send({ Data: 'Error' });
  }
});

// stripe payment
app.post('/checkout', async (req, res) => {
  let { name, price } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: { name: name },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${url}`,
    cancel_url: `${url}/payment`,
  });

  res.send({ url: session.url });
});

app.post('/purchase', async (req, res) => {
  const { plan, userId } = req.body;
  try {
    await User.updateOne(
      { _id: userId },
      {
        $set: {
          planId: plan._id,
          planStatus: true,
          planPurchase: new Date(),
        },
      }
    );
  } catch (error) {}
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT: ${PORT}`);
});
