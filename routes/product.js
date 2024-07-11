const express = require("express");
const router = express.Router();
const {
  AllProductGet,
  ProductDelete,
  ProductGet,
  ProductPost,
  ProductPut,
} = require("../controller/products");

router
  .post("/", ProductPost)
  .get("/", AllProductGet)
  .get("/:id", ProductGet)
  .put("/:id", ProductPut)
  .delete("/:id", ProductDelete);
module.exports = router;
