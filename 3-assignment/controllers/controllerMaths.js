const utils = require('../utils/utilsMaths');

exports.welcomeMaths = function(req, res) {
    res.send ('Welcome to Maths Library');
}

exports.random = function (req, res) {
    const data = utils.random(1,1000);
    res.send(`Random number is: ${data}`);
}