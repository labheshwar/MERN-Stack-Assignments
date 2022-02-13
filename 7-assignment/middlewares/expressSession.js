const session = require('express-session');

exports.sessionKey = session({
    secret: 'secretkey',
    resave: true,
    saveUninitialized: true
});