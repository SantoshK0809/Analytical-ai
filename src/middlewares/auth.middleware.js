const jwt = require("jsonwebtoken");
const BlackListToken = require("../models/blacklist.model.js");

async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: No token provided." });
  }

  const isBlacklisted = await BlackListToken.findOne({token});
  if(isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized: Token is Invalid." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token." });
  }
}

module.exports = { authUser };
