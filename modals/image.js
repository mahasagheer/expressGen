const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});
const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
