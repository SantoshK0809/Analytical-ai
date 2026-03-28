# 🚀 GenAI Interview Preparation Platform

A full-stack AI-powered application that analyzes a candidate’s profile and job description to generate a structured interview preparation strategy.

---

## 🧠 What This Project Does

This system takes:

* 📄 Job Description
* 👤 Self Description / Resume

And generates:

* 📊 Match Score
* ❗ Skill Gaps (with severity levels)
* 💻 Technical Interview Questions
* 🧠 Behavioral Interview Questions

---

## 🛠️ Tech Stack

### Frontend

* React 
* Vite
* React Router
* Axios
* Sass

---

### Backend

* Node.js
* Express 
* MongoDB + Mongoose

---

### AI & Validation

* Google Generative AI (`@google/genai`)
* Zod
* `zod-to-json-schema` (AI output structuring)

---

### File Handling & PDF

* Multer (file upload)
* `pdf-parse` (resume parsing)
* Puppeteer (PDF generation)

---

### Authentication

* JWT (`jsonwebtoken`)
* `bcryptjs`
* `cookie-parser`

---

## ⚙️ Features

* 🔐 Authentication with protected routes
* 📤 Resume upload (PDF/DOCX)
* 🤖 AI-powered interview report generation
* 📊 Match score calculation
* ❗ Skill gap detection with severity (High / Medium / Low)
* 🧠 Structured AI output validation (Zod)
* 🧾 Resume PDF generation
* 🗂️ View previous interview reports

---

## 👤 Author

Santosh Kirtane
Final Year BE IT | MERN Stack Developer

---

## ⚡ Final Thought

Most AI apps fail because they trust AI blindly.

This project focuses on:

> Turning AI output into **structured, reliable, production-ready data**
