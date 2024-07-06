const express = require("express");
const router = express.Router();
const Student = require("../modals/students");

router
  .post("/", async (req, res) => {
    let NewStd = new Student({
      stdname: "Anum",
      rollno: 2,
      age: 21,
      program: "Bs Sociology",
      address: "Faisalabad",
    });
    NewStd = await NewStd.save();
    res.write("Student Added");
    res.end();
  })
  .get("/", async (req, res) => {
    const GetStudent = await Student.find();
    res.send(GetStudent);
  })
  .get("/:id", async (req, res) => {
    const GetStudent = await Student.findOne({ stdname: "Rafay" });
    console.log(GetStudent);

    if (!GetStudent) return res.status(404).send("Student Don't Found :(");
    res.send(GetStudent);
  })
  .patch("/:id", async (req, res) => {
    const GetStudent = await Student.findOne(
      {
        stdname: "Anum",
      },
      {
        stdname: "Anum Batool",
        rollno: 2,
        age: 21,
        program: "Bs Computer Science",
        address: "Faisalabad",
      },
      { new: true }
    );
    if (!GetStudent) return res.status(404).send("Student Not Found");
    res.send(GetStudent);
  });
module.exports = router;
