const express = require ('express');
const app = express(); 
const oAuthRoute = require('./routes/auth');
const session = require ('./middlewares/expressSession');
require ("./configs/mongodb");
require ("./configs/passport");

app.use(session.sessionKey);
app.use('/auth', oAuthRoute);

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});
