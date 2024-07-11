const { setUser } = require("../service/auth");

async function authentication(req, res, next) {
  if (!setUser) {
    res.send("User Logged In");
    next();
  }
  res.send("User LOGGED OUT");
}
module.exports = {
  authentication,
};
