const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect(
    "mongodb+srv://hsv123456789:vaishnavee@cluster0.yzu2ier.mongodb.net/dish?retryWrites=true&w=majority",
    () => {
      console.log("connected");
    }
  );
}

module.exports = { connectDb };
