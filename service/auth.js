const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");
// const generateRandomKey = (length = 32) => {
//   return crypto.randomBytes(length).toString("hex");
// };
// const secretKey = generateRandomKey();
const secretKey = "*%pop560up%*";

function setUser(user) {
  localStorage.setItem("user", { _id: user.id, email: user.email });

  return jwt.sign(
    {
      _id: user.id,
      email: user.email,
    },
    secretKey,
    { expiresIn: "1hr" }
  );
}
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secretKey);
  } catch {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
