const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BlackListToken = require("../models/blacklist.model.js");

/**
 * @route POST /api/auth/register
 * @desc Register a new user, expects username, email and password in the request body.
 * @access Public
 */

async function handleRegister(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Username, email and password are required.",
      });
    }

    const isAlreadyRegistered = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (isAlreadyRegistered) {
      return res.status(400).json({
        message: "Username or email is already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({
      message: "User registered successfully.",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
}

/**
 * @route POST /api/auth/login
 * @desc Login a user, expects username/email and password in the request body.
 * @access Public
 */
async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({
      message: "User LoggedIn successfully.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
}

/**
 * @route GET /api/auth/logout
 * @desc Clear token from user cookie and add it to the blacklist.
 * @access Public
 */
async function handleUserLogout(req, res) {
  try {
    const token = req.cookies.token;

    if (token) {
      await BlackListToken.create({ token });
    }

    res.clearCookie("token");

    res.status(200).json({
      message: "User logged out successfully.",
    });
  } catch (err) {
    console.error("Error during logout:", err.message);
    return res.status(500).json({ message: "Internal server error." });
  }
}

/**
 * @route GET /api/auth/get-me
 * @desc Get the currently logged in user's information, expects token in the cookie.
 * @access Private
 */
async function handleGetUser(req, res) {
    try {
        const user = await User.findById(req.user.id).select("-password");

        res.status(200).json({
          message: "User information retrieved successfully.",
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          }
        });

    } catch (err) {
        return res.status(500).json({ message: "Internal server error." });
    }
}

module.exports = {
  handleRegister,
  handleUserLogin,
  handleUserLogout,
  handleGetUser,
};
