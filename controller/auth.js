const SHA256 = require("crypto-js/sha256");
const crypto = require("crypto-js");
const { setUser, getUser } = require("../service/auth");

const Signup = require("../modals/registration");

const key = "pop$#960corn";

async function handleSignupPost(req, res) {
  const { email, password, username } = req.body;
  const encrypted = crypto.AES.encrypt(password, key).toString();
  console.log(encrypted);

  let newUser = await Signup.create({
    email: email,
    password: encrypted,
    username: username,
  });
  newUser = newUser.save();
  newUser = res.status(201).json({ msg: "success" });
}

async function handleSignup(req, res) {
  try {
    const { email, password, username } = req.body;
    let data = await Signup.findOne({ email: email });
    const decrypted = crypto.AES.decrypt(data.password, key).toString(
      crypto.enc.Utf8
    );
    if (
      decrypted === password &&
      data.email === email &&
      data.username === username
    ) {
      const token = setUser(data);
      res.json({
        msg: "User Logged In",
      });
    } else {
      res.json({
        msg: "User Not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}
module.exports = {
  handleSignupPost,
  handleSignup,
};
