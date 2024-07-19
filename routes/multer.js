const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const Image = require("../modals/image");

router.post("/", upload.single("file"), async (req, res, next) => {
  const imageName = req.file.filename;
  const imageURL = req.file.path;
  try {
    let newImage = await Image.create({
      image: imageName,
      imageURL: imageURL,
    });
    newImage = newImage.save();
    res.json({ status: "Ok" });
  } catch {
    return res.status(404).json({ msg: "Server Not found" });
  }
});

router.get("/images/get", async (req, res) => {
  try {
    const products = await Image.find({});
    console.log(products);
    res.status(200).send({ status: "ok", data: products });
  } catch {
    res.status(500).json({ msg: "Unable to Fetch " });
  }
});
module.exports = router;
