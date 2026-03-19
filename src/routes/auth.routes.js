const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js")


/**
 * @route POST /api/auth/register
 * @desc Register a new user, expects username, email and password in the request body.
 * @access Public
 */
authRouter.post("/register", authController.handleRegister);

/**
 * @route POST /api/auth/login
 * @desc Login a user, expects username/email and password in the request body.
 * @access Public
 */
authRouter.post("/login", authController.handleUserLogin);

/**
 * @route GET /api/auth/logout
 * @desc Clear token from user cookie and add it to the blacklist.
 * @access Public
 */
authRouter.get("/logout", authController.handleUserLogout);

/**
 * @route GET /api/auth/get-me
 * @desc Get the currently logged in user's information, expects token in the cookie.
 * @access Private
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.handleGetUser);

module.exports = authRouter;