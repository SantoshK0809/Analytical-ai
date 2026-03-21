const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service.js");
const interviewReportModel = require("../models/interviewReport.model.js");

async function generateInterviewReportController(req, res) {
    try {
        const resumePdf = req.file;

        const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(resumePdf.buffer))).getText();
        const {selfDescription, jobDescription} = req.body;

        const interviewReportByAi = await generateInterviewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription
        });

        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
            ...interviewReportByAi
        });

        res.status(200).json({ 
            message: "Interview report generated successfully", 
            interviewReport 
        });
        
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "Failed to generate interview report", details: err.message });
    }
}

module.exports = { generateInterviewReportController};