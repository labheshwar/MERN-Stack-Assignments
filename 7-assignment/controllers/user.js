const passport = require("passport");

exports.fbAuthenticate = passport.authenticate('facebook', {authType: 'reauthenticate'});
exports.fbCallback = passport.authenticate('facebook', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failed'
});

exports.success = (req, res) => {
    return res.send('You are logged in');
}

exports.failed = (req, res) => {
    return res.send('Failed to log in');
}