const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { Dish } = require("./dishSchema");

const { connectDb } = require("./connect.db");

connectDb();

app.get("/", async (req, res) => {
  const data = await Dish.find({});

  res.json(data);
});

app.listen(8000, () => {
  console.log("server started at port 8000");
});
