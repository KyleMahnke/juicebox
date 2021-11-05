const express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const usersRouter = express.Router();
const { getAllUsers, getUserByUsername } = require('../db');
const jwt = require('jsonwebtoken')

usersRouter.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  // request must have both
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    });
  }

  try {
    const user = await getUserByUsername(username);

    if (user && user.password == password) {
      // create token & return to user
      jwt.sign({ Id: user.Id , username }, process.env.JWT_SECRET)
      res.send({ message: "you're logged in!" });
    } else {
      next({ 
        name: 'IncorrectCredentialsError', 
        message: 'Username or password is incorrect'
      });
    }
  } catch(error) {
    console.log(error);
    next(error);
  }
});

// localhost:3000/api/users/
usersRouter.get('/', async (req, res) => {
    const users = await getAllUsers();

    res.send({
      users
  });
});

usersRouter.post('/login', async (req, res, next) => {
  console.log(req.body);
  res.end();
});

module.exports = usersRouter;