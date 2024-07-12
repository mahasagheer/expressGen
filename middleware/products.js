const { getUser } = require("../service/auth");
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");

async function authentication(req, res, next) {
  const token = localStorage.getItem("user");
  if (!token) {
    return null;
  }
  const user = getUser(token);
  if (!user)
    return res.status(404).json({
      msg: "User Not valid",
    });
  req.user = user;
  next();
}
module.exports = {
  authentication,
};
