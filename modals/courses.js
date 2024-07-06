const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  program: {
    type: String,
    required: true,
    unique: false,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  semester: {
    type: Number,
    required: true,
    unique: false,
  },
  startyear: {
    type: Number,
    required: true,
    unique: false,
  },
  endyear: {
    type: Number,
    required: true,
    unique: false,
  },
});

const Courses = mongoose.model("Courses", coursesSchema);
module.exports = Courses;
