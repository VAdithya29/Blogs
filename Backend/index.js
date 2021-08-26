const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users1 = {
  users: [{ name: "Adithya123" }, { name: "aaa" }, { name: "bbb" }],
};
const users = [{ name: "Adithya123" }, { name: "aaa" }, { name: "bbb" }];
app.get("/", (req, res) => {
  res.json(users1);
});

let port = 5000;

app.listen(port, () => {
  console.log("Server started successfully");
});
