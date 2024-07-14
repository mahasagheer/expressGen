const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/cloudinary");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
