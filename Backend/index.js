const express = require("express");
const cors = require("cors");
const datastore = require("nedb");

const app = express();
const database = new datastore("opinionData.db");
app.use(cors());
app.use(express.json());

database.loadDatabase();

const users1 = {
  users: [{ name: "Adithya123" }, { name: "aaa" }, { name: "bbb" }],
};

app.get("/", (req, res) => {
  res.json(users1);
});

app.get("/opinions", (req, res) => {
  res.send("hi");
});

app.post("/opinions", (req, res) => {
  database.insert(req.body);
});

let port = 5000;
app.listen(port, () => {
  console.log("Server started successfully on http://localhost:5000/");
});
