const express = require('express');
const mathRoute = require('./routes/routerMaths');
const homeRoute = require('./routes/homeRoute');
const app = express();

app.use('/', homeRoute);
app.use('/maths', mathRoute);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log ('Server is running at wwww.localhost:3000');
    }
})