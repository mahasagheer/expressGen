const express = require("express");
const router = express.Router();
const {
  handleCourseGet,
  handleCoursePut,
  handleDynamicCourseGet,
  handleCoursePost,
} = require("../controller/index");

router
  .post("/", handleCoursePost)
  .get("/", handleCourseGet)
  .get("/:id", handleDynamicCourseGet)
  .put("/:id", handleCoursePut);
module.exports = router;
