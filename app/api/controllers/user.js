// app/api/controllers/user.js
'use strict';

class UserController {
  static authenticate(req, res, callback) {
    res.send('should auth user with callback');
    callback();
  }

  static getAllUsers(req, res) {
    res.send('should get users');
  }

  static getUser(req, res) {
    res.send('should get user');
  }

  static createUser(req, res) {
    res.send('should create user');
  }

  static updateUser(req, res) {
    res.send('should update user');
  }

  static deleteUser(req, res) {
    res.send('should delete user');
  }
}
module.exports = UserController;
