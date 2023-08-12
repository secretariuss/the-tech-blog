const {User} = require('../models');

const userData = [{
  "username": "David",
  "password": "12345"
},
  {
    "username": "Wutang",
    "password": "12345"
  },
  {
    "username": "Skywalker",
    "password": "12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
