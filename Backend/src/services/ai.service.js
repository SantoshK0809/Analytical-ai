const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");
//const { resume, selfDescription, jobDescription } = require("./temp.js");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 0 and 100 indicating how well the candidate's profile matches the job description, with 100 being a perfect match and 0 being no match at all.",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe(
            "The technical question that can be asked during the interview.",
          ),
        intention: z
          .string()
          .describe(
            "The intention of the interviewer behind asking this technical question.",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this technical question, what points to cover, what approach to take, etc.",
          ),
      }),
    )
    .describe(
      "List of technical questions that can be asked during the interview, along with the intention behind asking those questions and how to answer them.",
    ),

  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe(
            "The behavioral question that can be asked during the interview.",
          ),
        intention: z
          .string()
          .describe(
            "The intention of the interviewer behind asking this behavioral question.",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this behavioral question, what points to cover, what approach to take, etc.",
          ),
      }),
    )
    .describe(
      "List of behavioral questions that can be asked during the interview, along with the intention behind asking those questions and how to answer them.",
    ),

  skillGaps: z
    .array(
      z.object({
        skill: z
          .string()
          .describe(
            "The skill that the candidate is lacking and needs to work on.",
          ),
        severity: z
          .enum(["Low", "Medium", "High"])
          .describe(
            "The severity level of the skill gap, indicating how critical it is for the candidate to address this gap.",
          ),
      }),
    )
    .describe(
      "List of skill gaps that the candidate needs to work on, along with the severity level of each skill gap.",
    ),

  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe(
            "The day number in the preparation plan, indicating the sequence of the preparation tasks.",
          ),
        focus: z
          .string()
          .describe(
            "The focus area for that day in the preparation plan, indicating what the candidate should concentrate on.",
          ),
        tasks: z
          .array(z.string())
          .describe(
            "List of specific tasks that the candidate should complete on that day to prepare for the interview.",
          ),
      }),
    )
    .describe(
      "A day-wise preparation plan for the candidate, outlining what they should focus on and what tasks they should complete each day leading up to the interview.",
    ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  // const prompt = `
  //       Role: You are an expert Technical Recruiter and Career Coach.
  //       Task: Analyze the provided Resume, Self-Description, and Job Description (JD) to generate a gap analysis and interview preparation kit.
  //       Constraint: Your output must be valid JSON only. Do not include any introductory or concluding text. Follow the provided schema exactly.
  //       Input Data:
  //       Resume: ${resume}
  //       Self-Description: ${selfDescription}
  //       Job Description: ${jobDescription}
  //   `;

//   const prompt = `
// You MUST return output in STRICT JSON format.

// DO NOT add any explanation.
// DO NOT add extra fields.
// DO NOT change field names.

// Follow this EXACT structure:

// {
//   "matchScore": number,
//   "technicalQuestions": [
//     {
//       "question": string,
//       "intention": string,
//       "answer": string
//     }
//   ],
//   "behavioralQuestions": [
//     {
//       "question": string,
//       "intention": string,
//       "answer": string
//     }
//   ],
//   "skillGaps": [
//     {
//       "skill": string,
//       "severity": "Low" | "Medium" | "High"
//     }
//   ],
//   "preparationPlan": [
//     {
//       "day": number,
//       "focus": string,
//       "tasks": [string]
//     }
//   ]
// }

// IMPORTANT:
// - Output MUST be valid JSON
// - No trailing commas
// - No comments
// - No extra keys

// Now generate the report.

// Resume: ${resume}
// Self-Description: ${selfDescription}
// Job Description: ${jobDescription}
// Example:
// {
//   "matchScore": 85,
//   "technicalQuestions": [
//     {
//       "question": "Explain REST API principles",
//       "intention": "Check backend fundamentals",
//       "answer": "Discuss statelessness, CRUD, HTTP methods"
//     }
//   ],
//   "behavioralQuestions": [
//     {
//       "question": "Tell me about a challenge",
//       "intention": "Evaluate problem-solving",
//       "answer": "Use STAR method"
//     }
//   ],
//   "skillGaps": [
//     {
//       "skill": "Monitoring Tools",
//       "severity": "Medium"
//     }
//   ],
//   "preparationPlan": [
//     {
//       "day": 1,
//       "focus": "Backend basics",
//       "tasks": ["Revise Node.js", "Practice APIs"]
//     }
//   ]
// }
// `;

const prompt = `
You MUST return STRICT JSON.

Generate:
- 3 to 5 technical questions, intention behind the question, and expected answer based on job description
- 3 behavioral questions, intention behind the question, and expected answer of interviewer
- 3 to 5 skill gaps
- 5 day preparation plan

Each field MUST be fully filled. No null values allowed.

DO NOT leave any field empty.
data should be generated based on - 
Resume: ${resume}
Self Description: ${selfDescription}
Job Description: ${jobDescription}

Example:
{
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "Explain REST API principles",
      "intention": "Check backend fundamentals",
      "answer": "Discuss statelessness, CRUD, HTTP methods"
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Tell me about a challenge",
      "intention": "Evaluate problem-solving",
      "answer": "Use STAR method"
    }
  ],
  "skillGaps": [
    {
      "skill": "Monitoring Tools",
      "severity": "Medium"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "Backend basics",
      "tasks": ["Revise Node.js", "Practice APIs"]
    }
  ]
}

`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseJSONSchema: zodToJsonSchema(interviewReportSchema),
    },
  });
  //console.log(JSON.parse(response.text));
  return JSON.parse(response.text);
}

module.exports = generateInterviewReport;
