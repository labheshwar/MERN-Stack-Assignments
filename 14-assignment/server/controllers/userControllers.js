const User = require("../models/User");
const passwordHasher = require("../utils/passwordHasher");
const jwt = require("jsonwebtoken");

exports.login = function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Error occured while fetching user",
      });
    } else if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      const userEnteredPassword = req.body.password;
      const isCorrectPassword = passwordHasher.comparePassword(
        userEnteredPassword,
        user.password
      );

      if (isCorrectPassword) {
        jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: user,
          },
          "secret",
          (err, token) => {
            if (err) {
              res.status(500).json({
                success: false,
                message: "Error occured while creating token",
              });
            } else {
              return res.status(200).json({
                success: true,
                name: user.name,
                token: `Bearer ${token}`
              });
            }
          }
        );
      } else {
        res.status(404).json({
          success: false,
          message: "Incorrect password",
        });
      }
    }
  });
};

exports.signup = function (req, res) {
  const body = req.body;

  if (req.password !== req.confirmPassword) {
    return res.status(406).json({
      success: false,
      message: "Passwords do not match",
    });
  } else {
    User.findOne({ email: body.email }, function (err, user) {
      if (err) {
        res.status(500).json({
          success: false,
          message: "Error occured while fetching user",
        });
      } else if (user) {
        res.status(409).json({
          success: false,
          message: "User already exists",
        });
      } else {
        const hashedPassword = passwordHasher.hashPassword(body.password);
        const newUser = new User({
          name: body.name,
          email: body.email,
          phone: body.phone,
          password: hashedPassword,
          confirmPassword: hashedPassword,
        });
        newUser.save(function (err, user) {
          if (err) {
            res.status(500).json({
              success: false,
              message: "Error occured while saving user",
            });
          } else {
            res.status(201).json({
              success: true,
              data: user,
              message: "User created successfully",
            });
          }
        });
      }
    });
  }
};
