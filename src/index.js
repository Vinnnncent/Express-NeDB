// init project
var express = require("express");
var app = express();

// Using `public` for static files: http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// ROUTES
var indexRouter = require("./../routes/index");
var usersRouter = require("./../routes/users");

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
