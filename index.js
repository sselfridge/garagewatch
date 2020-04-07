var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/meinDB", { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Starting Connection");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("// were connected!: ");

  saveFluffy();
});

var kittySchema = new mongoose.Schema({
  name: String,
});

function saveFluffy() {
  var Kitten = mongoose.model("Kitten", kittySchema);
  var fluffy = new Kitten({ name: "fluffy" });
  console.log("Saving Fluffy");
  fluffy.save(function (err, fluffy) {
    console.log("Fluffy Saved!");
    if (err) return console.error(err);
  });
  console.log('And we"re done here');
}
