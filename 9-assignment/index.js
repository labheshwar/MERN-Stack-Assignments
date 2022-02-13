const express = require('express');
const app = express();
const user = require('./routes/user');
require('./configs/mongodb');

app.use(express.json());
app.use('/user', user)

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});

