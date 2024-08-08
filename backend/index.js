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
  const storedData = fs.writeFileSync(
    "data.json",
    JSON.stringify(payload, null),
    (e) => {
      console.log(e);
    }
  );
  res.send(payload);
  console.log(payload);
  console.log(storedData);
});

app.listen(port, () => {
  console.log("server running in " + port);
});
