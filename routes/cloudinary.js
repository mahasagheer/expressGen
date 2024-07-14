const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = require("../middleware/multer");
const cloudinary = require("../utilities/cloudinary");
router.post("/", upload.single("file"), async (req, res) => {
  cloudinary.uploader.upload(req.file.path, function (err, result) {
    if (err) {
      res.status(404);
    }
    console.log(result.data);
    res.status(200).json({
      msg: "Success",
      data: result,
    });
  });
});

module.exports = router;
