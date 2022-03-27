const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./routes/user");
const todo = require("./routes/todo");
const passport = require("passport");
require("./configs/mongodb");
require("./configs/passport")(passport);


app.use(cors());
app.use(express.json());
app.use("/user", user);
app.use("/todo", passport.authenticate("jwt", { session: false }), todo);


app.listen(4000, (err) => {
  if (err) console.log(err);
  else console.log("SERVER IS RUNNING ON PORT 4000");
});
