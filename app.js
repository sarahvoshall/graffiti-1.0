const express = require("express");

const path = require("path");
const mongoose = require("./mongoose");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/graffiti", mongoose.getTags);

app.post("/graffiti", mongoose.createTag);

app.listen(port);
