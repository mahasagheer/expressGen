const express = require("express");
const router = express.Router();
const { handleSignupPost, handleSignup } = require("../controller/auth");
router.post("/find", handleSignup).post("/login", handleSignupPost);
module.exports = router;
