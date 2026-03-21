const express = require('express');
const authMiddleware  = require("../middlewares/auth.middleware.js");
const interviewController = require("../controllers/interview.controller.js");
const upload = require("../middlewares/file.middleware.js");

const interviewRouter = express.Router();

/**
 * @route POST /api/interview/generate-report
 * @desc Generate an interview preparation report based on the candidate's resume, self-description, and the job description.
 * @access Private
 * @body { resume: string, selfDescription: string, jobDescription: string }
 * @returns { matchScore: number, technicalQuestions: Array<{ question: string, intention: string, answer: string }>, behavioralQuestions: Array<{ question: string, intention: string, answer: string }> }
 */
interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterviewReportController);



module.exports = interviewRouter;