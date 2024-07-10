const express = require("express");
const router = express.Router();
const {
  handleStudentGet,
  handleDynamicStudentGet,
  handleStudentPost,
  handleStudentPut,
} = require("../controller/index");

router
  .post("/", handleStudentPost)
  .get("/", handleStudentGet)
  .get("/:id", handleDynamicStudentGet)
  .put("/:id", handleStudentPut);
module.exports = router;
