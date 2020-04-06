var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/meinDB", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
});
var kittySchema = new mongoose.Schema({
  name: String,
});
var Kitten = mongoose.model("Kitten", kittySchema);

var silence = new Kitten({ name: "Silence" });

var Kitten = mongoose.model("Kitten", kittySchema);
var fluffy = new Kitten({ name: "fluffy" });
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
});

console.log('And we"re done here');
