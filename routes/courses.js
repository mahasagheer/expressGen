const express = require("express");
const router = express.Router();
const Courses = require("../modals/courses");

router
  .post("/", async (req, res) => {
    let AddCourse = new Courses({
      program: "Bs Computer Science",
      semester: 6,
      startyear: 2021,
      endyear: 2025,
      id: 2,
    });
    AddCourse = await AddCourse.save();
    res.write("Course Added");
    res.end();
  })
  .get("/", async (req, res) => {
    let AddCourse = await Courses.find();
    res.send(AddCourse);
  })
  .get("/:id", async (req, res) => {
    console.log(req.params.id);
    const GetCourse = await Courses.findOne({ program: "Bs Computer Science" });
    console.log(GetCourse);
    if (!GetCourse) return res.status(404).send("Course not Found");
    res.send(GetCourse);
  })
  .put("/:id", async (req, res) => {
    const updateData = await Courses.findOne(
      {
        semester: 6,
      },
      {
        program: "Bs IT",
        semester: 6,
        startyear: 2022,
        endyear: 2025,
        id: 2,
      },
      { new: true }
    );
    if (!updateData) return res.status(404).send("Course Not Found :(");
    res.send(updateData);
  });
module.exports = router;
