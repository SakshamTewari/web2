const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '123456';

const app = express();

// in-memory users for now
const ALL_USERS = [
  {
    username: 't1@test.com',
    name: 't1',
  },
  {
    username: 't2@test.com',
    name: 't2',
  },
];

function userExists(username, password){
  // logic to return true/false if this user exists
  // try to do with 'find' function in js
  for(let i=0 ; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password)
        return true;
  }
  return false;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(!userExists(username, password)){
    return res.status(403).json({
      msg: "User doesn't exists",
    });
  }

  var token = jwt.sign({username: username}, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try(
    const decoded = jwt.verify(token, jwtPassword);
  )
})