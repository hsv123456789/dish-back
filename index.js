const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const { Dish } = require("./dishSchema");

const { connectDb } = require("./connect.db");

connectDb();

app.get("/", async (req, res) => {
  const data = await Dish.find({});

  res.json(data);
});

app.post("/post", async (req, res) => {
  console.log(req.body);
  const data = await Dish.create(req.body);

  res.json({ message: "Dish added", data });
});

app.listen(8000, () => {
  console.log("server started at port 8000");
});
