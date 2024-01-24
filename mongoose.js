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

const getTag = async (req, res, next) => {
  const tag = await Tag.findById(req.params.tagId).exec();

  res.json(tag);
};

const createTag = async (req, res, next) => {
  const createdTag = new Tag({
    tag: req.body.tag,
  });

  const result = await createdTag.save();

  res.json(result);
};

const deleteTag = async (req, res, next) => {
  const tag = await Tag.findByIdAndDelete(req.params.tagId);

  res.json({ message: "Tag deleted." });
};

exports.getTag = getTag;
exports.getTags = getTags;
exports.createTag = createTag;
exports.deleteTag = deleteTag;
