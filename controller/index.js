const Student = require("../modals/students");
const Courses = require("../modals/courses");
const StudentData = require("../MOCK_DATA.json");
const CourseData = require("../MOCK_COR.json");
const fs = require("fs");

async function handleStudentGet(req, res) {
  try {
    res.json(StudentData);
  } catch (error) {
    res.send("Unable to fetch");
  }
}

async function handleDynamicStudentGet(req, res) {
  try {
    const id = Number(req.params.id);
    const Getstudent = StudentData.filter((std) => std.roll_no === id);
    res.json(Getstudent);
  } catch {
    return res.status(404).send("Student Don't Found :(");
  }
}

async function handleStudentPost(req, res) {
  try {
    const body = req.body;
    StudentData.push({ ...body, roll_no: StudentData.length + 1 });
    fs.appendFile(
      ("./MOCK_DATA.json", null, 2),
      JSON.stringify(StudentData),
      (err, data) => {
        return res.json({
          status: "Success",
          id: StudentData.length,
        });
      }
    );
  } catch {
    return res.status(404).send("Student Don't Found :(");
  }
}
async function handleStudentPut(req, res) {
  try {
    const body = req.body;
    const id = Number(req.params.id);
    const find = StudentData.find((std) => std.roll_no === id);
    fs.appendFile(
      ("./MOCK_DATA.json", null, 2),
      JSON.stringify({ ...body, roll_no: find.roll_no }),
      (err, data) => {
        return res.json({
          status: "Success",
          roll_no: find.roll_no,
        });
      }
    );
  } catch {
    return res.status(404).send("Student Not Found");
  }
}

async function handleCourseGet(req, res) {
  try {
    res.send(CourseData);
  } catch (error) {
    res.send("Unable to fetch");
  }
}
async function handleDynamicCourseGet(req, res) {
  try {
    const id = Number(req.params.id);
    const GetCourse = CourseData.filter((cor) => cor.id === id);
    res.json(GetCourse);
  } catch {
    return res.status(404).send("Course not Found");
  }
}
async function handleCoursePost(req, res) {
  try {
    const body = req.body;
    CourseData.push({ ...body, id: CourseData.length + 1 });
    fs.appendFile(
      ("./MOCK_COR.json", null, 2),
      JSON.stringify(CourseData),
      (err, data) => {
        return res.json({
          status: "Success",
          id: CourseData.length,
        });
      }
    );
  } catch {
    res.status(404).send("Unable to add new Course");
  }
}
async function handleCoursePut(req, res) {
  try {
    const body = req.body;
    const id = Number(req.params.id);
    const find = CourseData.find((cor) => cor.id === id);
    fs.appendFile(
      ("./MOCK_Cor.json", null, 2),
      JSON.stringify({ ...body, id: find.id }),
      (err, data) => {
        return res.json({
          status: "Success",
          id: find.id,
        });
      }
    );
  } catch {
    res.status(404).send("Course Not Found :(");
  }
}

module.exports = {
  handleStudentGet,
  handleDynamicStudentGet,
  handleStudentPost,
  handleStudentPut,
  handleCourseGet,
  handleCoursePut,
  handleCoursePost,
  handleDynamicCourseGet,
};
