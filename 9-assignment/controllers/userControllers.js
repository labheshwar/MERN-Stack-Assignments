const User = require('../models/User');
const passwordHasher = require('../utils/passwordHasher');

exports.login = function (req, res) {
    User.findOne({ email: req.body.email}, function (err, user) {
        if (err) {
            res.status(500).json({
                success: false,
                message: "Error occured while fetching user"
            });
        }
        else if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else {
            const userEnteredPassword = req.body.password;
            const isCorrectPassword = passwordHasher.comparePassword(userEnteredPassword, user.password);

            if (isCorrectPassword) {
                return res.status(200).json({
                    success: true,
                    data: user,
                    message: "User logged in successfully"
                 });
            }
            else {
                return res.status(403).send('Incorrect Password');
            }
        }
    });
}

exports.signup = function (req, res) {
    const body = req.body;
    body.password = passwordHasher.hashPassword(body.password);
    const user = new User(body);
    user.save();
    res.status(200).json({
        success: true,
        data: user,
        message: "User created successfully"
    });
}