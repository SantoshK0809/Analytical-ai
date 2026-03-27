const pdfParse = require("pdf-parse");
const {
  generateInterviewReport,
  generateResumePdf,
} = require("../services/ai.service.js");
const interviewReportModel = require("../models/interviewReport.model.js");

async function generateInterviewReportController(req, res) {
  try {
    const resumePdf = req.file;

    if (!resumePdf) {
      return res.status(400).json({
        error: "Resume file is required",
      });
    }

    const resumeContent = await new pdfParse.PDFParse(
      Uint8Array.from(resumePdf.buffer),
    ).getText();
    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    });

    // Ensure title is present; provide a default if missing
    const title = interviewReportByAi.title || "Interview Report";

    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      title,
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAi,
    });

    res.status(200).json({
      message: "Interview report generated successfully",
      interviewReport,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      error: "Failed to generate interview report",
      details: err.message,
    });
  }
}

/**
 * @desc Get the interview report by interview ID.
 * @access Private
 */
async function getInterviewReportController(req, res) {
  try {
    const { interviewId } = req.params;
    const interviewReport = await interviewReportModel.findOne({
      _id: interviewId,
      user: req.user.id,
    });

    if (!interviewReport) {
      return res.status(404).json({ error: "Interview report not found" });
    }

    res.status(200).json({
      message: "Interview report fetched successfully",
      interviewReport,
    });
  } catch (err) {
    console.log("ERR- ", err.message);
    return res.status(500).json({
      error: "Failed to fetch interview report",
      details: err.message,
    });
  }
}

/**
 * @desc Get all interview reports for the authenticated user.
 * @access Private
 */
async function getAllInterviewReportsController(req, res) {
  try {
    const interviewReports = await interviewReportModel
      .find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .select(
        "-resume -selfDescription -jobDescription -__v -behavioralQuestions -technicalQuestions -preparationPlan -skillGaps",
      );

    if (!interviewReports) {
      return res
        .status(404)
        .json({ message: "No interview reports found for the user" });
    }

    res.status(200).json({
      message: "Interview reports fetched successfully",
      interviewReports,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      error: "Failed to fetch interview reports",
      details: err.message,
    });
  }
}

async function generateResumePdfController(req, res) {
  try {
    const { interviewReportId } = req.params;

    const interviewReport = await interviewReportModel.findById(interviewReportId);

    if (!interviewReport) {
      return res.status(404).json({
        message: "Interview report not found.",
      });
    }

    const { resume, jobDescription, selfDescription } = interviewReport;

    const pdfBuffer = await generateResumePdf({
      resume,
      jobDescription,
      selfDescription,
    });

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
    });

    res.send(pdfBuffer);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  generateInterviewReportController,
  getInterviewReportController,
  getAllInterviewReportsController,
  generateResumePdfController,
};
