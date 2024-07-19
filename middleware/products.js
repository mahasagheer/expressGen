const { getUser } = require("../service/auth");

async function authentication(req, res, next) {
  const token = req.headers.authorization;
  console.log(token);
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
