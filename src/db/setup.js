var Datastore = require("nedb");
var bodyParser = require("body-parser");

var db = new Datastore({
  filename: "/sandbox/src/db/database",
  autoload: true
});

// use body-parser to parse application/x-www-form-urlencoded form data
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

// initial set of users populate the database with
var defaultUsers = ["youpi", "youpi2", "youpi3"];
var users = defaultUsers.slice();

const Setup = function() {
  var dbUsers = [];

  db.remove({}, { multi: true }, function(err, numRemoved) {
    // loop through all users
    for (var i = 0; i < users.length; i++) {
      dbUsers.push({ name: users[i] });
    }
    db.insert(dbUsers, function(err, newdocs) {
      // add initial users to the database
    });
  });
};

Setup();

module.exports = {
  db: db,
  defaultUsers: defaultUsers,
  setup: Setup,
  urlEncodedParser: urlEncodedParser
};
