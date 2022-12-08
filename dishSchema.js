const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  ingredients: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
  },
  description: String,
});

const Dish = mongoose.model("dish", schema);

module.exports = { Dish };
