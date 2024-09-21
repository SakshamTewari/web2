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
