const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 8001;

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Checking api connection");
});

app.post("/", (req, res) => {
  const payload = req.body;
  res.send(payload);
});

app.listen(port, () => {
  console.log("server running in " + port);
});
