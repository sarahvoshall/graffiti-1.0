const mongoose = require("mongoose");
const Tag = require("./models/tag"); 

const url =
  "mongodb+srv://sarah:hello@cluster0.z9kd34g.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => console.log("Connection failed..."));

const getTags = async (req, res, next) => {
  const tags = await Tag.find().exec();

  res.json(tags);
};

const createTag = async (req, res, next) => {
    const createdTag = new Tag({
      tag: req.body.tag,
    });
  
    const result = await createdTag.save();
  
    res.json(result);
  };

exports.getTags = getTags;
exports.createTag = createTag;
