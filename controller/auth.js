const crypto = require("crypto-js");
const { setUser } = require("../service/auth");

const User = require("../modals/registration");

const key = "pop$#960corn";

async function handleSignupPost(req, res) {
  const { email, password, username } = req.body;
  const encrypted = crypto.AES.encrypt(password, key).toString();

  let newUser = await User.create({
    email: email,
    password: encrypted,
    username: username,
  });
  res.status(201).json({ msg: "success", user: newUser._id });
  newUser = newUser.save();
}

async function handleSignup(req, res) {
  try {
    const { email, password, username } = req.body;
    let data = await User.findOne({ email: email });
    if (data) {
      const decrypted = crypto.AES.decrypt(data.password, key).toString(
        crypto.enc.Utf8
      );
      if (decrypted === password && data.username === username) {
        const token = setUser(data);

        res.json({
          msg: "User Logged In",
          token: token,
        });
      }
    } else {
      res.json({
        msg: "User Not found",
      });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
}
module.exports = {
  handleSignupPost,
  handleSignup,
};
