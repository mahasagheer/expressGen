const mongoose = require("mongoose");

const stdSchema = new mongoose.Schema({
  stdname: {
    type: String,
    required: true,
    unique: false,
  },
  rollno: {
    type: Number,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    unique: false,
  },
  program: {
    type: String,
    required: true,
    unique: false,
  },
  address: {
    type: String,
    required: true,
    unique: false,
  },
});

const Student = mongoose.model("Student", stdSchema);
module.exports = Student;
