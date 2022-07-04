const { User } = require("../models/index");
const { compareHash, createHash } = require("../helpers/bcrypt");
const { createToken, signToken } = require("../helpers/jwt");

class Controller {
  //register
  static async createUser(req, res, next) {
    try {
      let role = "admin";
      const { username, email, password, address, phoneNumber } = req.body;
      console.log(req.body);
      const newUser = await User.create({ username, email, password, role, phoneNumber, address });
      if (!newUser) {
        throw { name: "failedRegister" };
      }

      res.status(201).json({
        statusCode: 201,
        message: "Register success",
        data: {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          phone: newUser.phone,
          address: newUser.address,
        },
      });
    } catch (err) {
        console.log(err);
      next(err);
    }
  }

  //login
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "require" };
      }
      const foundUser = await User.findOne({
        where: {
          email,
        },
      });
      if (!foundUser) {
        throw { name: "userNotFound" };
      }

      const correctPassword = compareHash(password, foundUser.password);

      if (!correctPassword) {
        throw { name: "passIncorrect" };
      }

      const payLoad = {
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
      };
      const access_token = createToken(payLoad);

      res.status(200).json({
        message: "Succes Login",
        access_token: access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
