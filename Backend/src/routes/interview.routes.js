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

/**
 * @route GET /api/interviewreport/:interviewId
 * @desc Get the interview report by interview ID.
 * @access Private
 */
interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interviewController.getInterviewReportController);

/**
 * @route GET /api/interviewreport
 * @desc Get all interview reports for the authenticated user.
 * @access Private
 */
interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController);

/**
 * @route GET /api/interview/resume/pdf
 * @description generate resume pdf on the basis of user self description, resume content and job description.
 * @access private
 */
interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, interviewController.generateResumePdfController);


module.exports = interviewRouter;