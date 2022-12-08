const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  integrents: [String],
  description: String,
});

const Dish = mongoose.model("dish", schema);

module.exports = { Dish };
