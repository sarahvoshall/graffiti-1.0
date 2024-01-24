const express = require("express");

const path = require("path");
const mongoose = require("./mongoose");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/graffiti", mongoose.getTags);
app.get("/graffiti/:tagId", mongoose.getTag);

app.post("/graffiti", mongoose.createTag);

app.delete("/graffiti/:tagId", mongoose.deleteTag);

app.listen(port);
