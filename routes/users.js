var express = require("express");
var router = express.Router();
var setup = require("./../src/db/setup");

router.get("/", function(req, res, next) {
  // find all users
  setup.db.find({ name: { $exists: true } }, function(err, docs) {
    res.send(docs);
  });
});

router.get("/remove/:id", function(req, res, next) {
  setup.db.remove({ _id: req.params.id }, {}, function(err, numRemoved) {
    // numRemoved = 1
    res.redirect("/");
  });
});

router.post("/new", setup.urlEncodedParser, function(req, res) {
  setup.db.insert({ name: req.body.user }, function(err, numReplaced, upSert) {
    res.redirect("/");
  });
});

router.get("/reset", function(req, res) {
  setup.setup();
  res.redirect("/");
});

module.exports = router;
