const express = require('express');
const app = express();
const authRouter = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const interviewRouter = require("./routes/interview.routes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);


module.exports = app;