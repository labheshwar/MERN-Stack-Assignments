const express = require('express');
require("./configs/mongodb");
const chat = require("./routes/chatRoutes");
const bodyParser = require('./middlewares/bodyParser');
const app = express();

app.use(bodyParser.parse);
app.use("/", chat);

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
})
