var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.sendFile("/sandbox/views/index.html");
});

module.exports = router;
