const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const generateRandomKey = (length = 32) => {
  return crypto.randomBytes(length).toString("hex");
};
const secretKey = generateRandomKey();

function setUser(user) {
  return jwt.sign(
    {
      _id: user.id,
      email: user.email,
    },
    secretKey,
    { expiresIn: "1hr" }
  );
}

module.exports = {
  setUser,
};

// getUser,
// function getUser(token) {
//   if (!token) return null;
//   try {
//     return jwt.verify(token, secret);
//   } catch {
//     return null;
//   }
// }
