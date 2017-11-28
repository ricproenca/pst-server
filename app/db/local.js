// app/db/local.js
'use strict';

import shortid from 'shortid';

let usersList = [];

const LocalDatabase = {
  save: userData => {
    userData.id = shortid.generate();
    usersList.push(userData);
  },
  find: id => {
    return usersList.find(item => {
      return item.id === id;
    });
  },
  remove: id => {
    let found = 0;
    usersList = usersList.filter(item => {
      if (item.id === id) {
        found = 1;
      }
      return item.id !== id;
    });
    return found;
  },
  update: (id, newUser) => {
    const user = usersList.find(item => {
      return item.id === id;
    });

    // if (user) {
    //   user.email = newUser.email || user.email;
    //   user.username = newUser.username || user.username;
    //   user.password = newUser.password || user.password;
    //   return 1;
    // }
    // return 0;
  }
};

module.exports = LocalDatabase;
