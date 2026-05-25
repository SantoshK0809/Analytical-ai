import React, { useState, useRef } from "react";

import { useInterview } from "../hooks/useInterview.js";
import { useNavigate } from "react-router";
import Navbar from "../../auth/components/Navbar.jsx";

const Home = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [resumeFileName, setResumeFileName] = useState("");
  const resumeInputRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0];

    if (!jobDescription || (!selfDescription && !resumeFile)) {
      alert(
        "Please provide a job description and either a self description or a resume.",
      );
      return;
    }

    try {
      const data = await generateReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      if (data && data._id) {
        navigate(`/interview/${data._id}`);
      }
    } catch (error) {
      console.error(error);
      alert(
        "Failed to generate report. Please try again or provide a different resume.",
      );
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading your interview plan...</p>
      </div>
      //   <main className="loading-screen">
      //     <h1>Loading your interview plan...</h1>
      //   </main>
    );
  }

  // return (
  //   <div className="home-page">
  //     {/* Page Header */}
  //     <header className="page-header">
  //       <h1>
  //         Create Your Custom <span className="highlight">Interview Plan</span>
  //       </h1>
  //       <p>
  //         Let our AI analyze the job requirements and your unique profile to
  //         build a winning strategy.
  //       </p>
  //     </header>

  //     {/* Main Card */}
  //     <div className="interview-card">
  //       <div className="interview-card__body">
  //         {/* Left Panel - Job Description */}
  //         <div className="panel panel--left">
  //           <div className="panel__header">
  //             <span className="panel__icon">
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 width="18"
  //                 height="18"
  //                 viewBox="0 0 24 24"
  //                 fill="none"
  //                 stroke="currentColor"
  //                 strokeWidth="2"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               >
  //                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
  //                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  //               </svg>
  //             </span>
  //             <h2>Target Job Description</h2>
  //             <span className="badge badge--required">Required</span>
  //           </div>
  //           <textarea
  //             onChange={(e) => {
  //               setJobDescription(e.target.value);
  //             }}
  //             className="panel__textarea"
  //             placeholder={`Paste the full job description here...\ne.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
  //             maxLength={5000}
  //           />
  //           <div className="char-counter">0 / 5000 chars</div>
  //         </div>

  //         {/* Vertical Divider */}
  //         <div className="panel-divider" />

  //         {/* Right Panel - Profile */}
  //         <div className="panel panel--right">
  //           <div className="panel__header">
  //             <span className="panel__icon">
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 width="18"
  //                 height="18"
  //                 viewBox="0 0 24 24"
  //                 fill="none"
  //                 stroke="currentColor"
  //                 strokeWidth="2"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               >
  //                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  //                 <circle cx="12" cy="7" r="4" />
  //               </svg>
  //             </span>
  //             <h2>Your Profile</h2>
  //           </div>

  //           {/* Upload Resume */}
  //           <div className="upload-section">
  //             <label className="section-label">
  //               Upload Resume
  //               <span className="badge badge--best">Best Results</span>
  //             </label>
  //             <label className="dropzone" htmlFor="resume">
  //               {resumeFileName ? (
  //                 <>
  //                   <span className="dropzone__icon" style={{ color: "#3b82f6" }}>
  //                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //                       <polyline points="20 6 9 17 4 12" />
  //                     </svg>
  //                   </span>
  //                   <p className="dropzone__title" style={{ color: "#3b82f6", fontWeight: "600" }}>
  //                     File Selected
  //                   </p>
  //                   <p className="dropzone__subtitle">{resumeFileName}</p>
  //                   <p className="dropzone__subtitle" style={{ fontSize: "12px", marginTop: "5px" }}>Click to change file</p>
  //                 </>
  //               ) : (
  //                 <>
  //                   <span className="dropzone__icon">
  //                     <svg
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       width="28"
  //                       height="28"
  //                       viewBox="0 0 24 24"
  //                       fill="none"
  //                       stroke="currentColor"
  //                       strokeWidth="2"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     >
  //                       <polyline points="16 16 12 12 8 16" />
  //                       <line x1="12" y1="12" x2="12" y2="21" />
  //                       <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  //                     </svg>
  //                   </span>
  //                   <p className="dropzone__title">
  //                     Click to upload or drag &amp; drop
  //                   </p>
  //                   <p className="dropzone__subtitle">PDF or DOCX (Max 5MB)</p>
  //                 </>
  //               )}
  //               <input
  //                 ref={resumeInputRef}
  //                 hidden
  //                 type="file"
  //                 id="resume"
  //                 name="resume"
  //                 accept=".pdf,.docx"
  //                 onChange={handleFileChange}
  //               />
  //             </label>
  //           </div>

  //           {/* OR Divider */}
  //           <div className="or-divider">
  //             <span>OR</span>
  //           </div>

  //           {/* Quick Self-Description */}
  //           <div className="self-description">
  //             <label className="section-label" htmlFor="selfDescription">
  //               Quick Self-Description
  //             </label>
  //             <textarea
  //               onChange={(e) => {
  //                 setSelfDescription(e.target.value);
  //               }}
  //               id="selfDescription"
  //               name="selfDescription"
  //               className="panel__textarea panel__textarea--short"
  //               placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
  //             />
  //           </div>

  //           {/* Info Box */}
  //           <div className="info-box">
  //             <span className="info-box__icon">
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 width="16"
  //                 height="16"
  //                 viewBox="0 0 24 24"
  //                 fill="currentColor"
  //               >
  //                 <circle cx="12" cy="12" r="10" />
  //                 <line
  //                   x1="12"
  //                   y1="8"
  //                   x2="12"
  //                   y2="12"
  //                   stroke="#1a1f27"
  //                   strokeWidth="2"
  //                 />
  //                 <line
  //                   x1="12"
  //                   y1="16"
  //                   x2="12.01"
  //                   y2="16"
  //                   stroke="#1a1f27"
  //                   strokeWidth="2"
  //                 />
  //               </svg>
  //             </span>
  //             <p>
  //               Either a <strong>Resume</strong> or a{" "}
  //               <strong>Self Description</strong> is required to generate a
  //               personalized plan.
  //             </p>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Card Footer */}
  //       <div className="interview-card__footer">
  //         <span className="footer-info">
  //           AI-Powered Strategy Generation &bull; Approx 30s
  //         </span>
  //         <button onClick={handleGenerateReport} className="generate-btn">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             width="16"
  //             height="16"
  //             viewBox="0 0 24 24"
  //             fill="currentColor"
  //           >
  //             <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  //           </svg>
  //           Generate My Interview Strategy
  //         </button>
  //       </div>
  //     </div>

  //     {/* Recent Reports List */}
  //     {reports.length > 0 && (
  //       <section className="recent-reports">
  //         <h2>My Recent Interview Plans</h2>
  //         <ul className="reports-list">
  //           {reports.map((report) => (
  //             <li
  //               key={report._id}
  //               className="report-item"
  //               onClick={() => navigate(`/interview/${report._id}`)}
  //             >
  //               <h3>{report.title || "Untitled Position"}</h3>
  //               <p className="report-meta">
  //                 Generated on {new Date(report.createdAt).toLocaleDateString()}
  //               </p>
  //               <p
  //                 className={`match-score ${report.matchScore >= 80 ? "score--high" : report.matchScore >= 60 ? "score--mid" : "score--low"}`}
  //               >
  //                 Match Score: {report.matchScore}%
  //               </p>
  //             </li>
  //           ))}
  //         </ul>
  //       </section>
  //     )}

  //     {/* Page Footer */}
  //     <footer className="page-footer">
  //       <a href="#">Privacy Policy</a>
  //       <a href="#">Terms of Service</a>
  //       <a href="#">Help Center</a>
  //     </footer>
  //   </div>
  // );

  return (
    <>
      <Navbar className="bg-black" />
      <div className="min-h-screen bg-[#050505] text-white px-4 py-10 md:px-8">
        {/* Header */}

        <header className="mx-auto max-w-4xl text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Create Your Custom
            <span className="text-red-500"> Interview Plan</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-7">
            Let our AI analyze job requirements and your profile to build a
            winning strategy.
          </p>
        </header>

        {/* Main Card */}

        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#111111] overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.05)]">
          <div className="grid lg:grid-cols-[1fr_auto_1fr]">
            {/* LEFT */}

            <div className="p-6 md:p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-red-500">📄</span>

                <h2 className="font-semibold">Target Job Description</h2>

                <span className="ml-auto text-xs px-2 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400">
                  Required
                </span>
              </div>

              <div className="relative flex-1">
                <textarea
                  onChange={(e) => setJobDescription(e.target.value)}
                  maxLength={5000}
                  placeholder="Paste the full job description here..."
                  className="w-full h-[320px] rounded-xl bg-[#181818] border border-white/10 p-4 text-sm resize-none outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />

                <span className="absolute bottom-4 right-4 text-xs text-gray-500">
                  {jobDescription.length}/5000
                </span>
              </div>
            </div>

            {/* Divider */}

            <div className="hidden lg:block w-px bg-white/10" />

            {/* RIGHT */}

            <div className="p-6 md:p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-red-500">👤</span>

                <h2 className="font-semibold">Your Profile</h2>
              </div>

              {/* Upload */}

              <div>
                <label className="flex items-center gap-2 mb-3 text-sm">
                  Upload Resume
                  <span className="text-xs px-2 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400">
                    Best Results
                  </span>
                </label>

                <label
                  htmlFor="resume"
                  className="border-2 border-dashed border-white/10 rounded-2xl bg-[#181818] hover:border-red-500 transition cursor-pointer flex flex-col items-center justify-center py-10 px-5"
                >
                  {resumeFileName ? (
                    <>
                      <p className="text-red-400 font-semibold">
                        File Selected
                      </p>

                      <p className="text-sm text-gray-400 mt-2">
                        {resumeFileName}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium">Upload Resume</p>

                      <p className="text-sm text-gray-400 mt-2">
                        PDF or DOCX (Max 5MB)
                      </p>
                    </>
                  )}

                  <input
                    ref={resumeInputRef}
                    hidden
                    id="resume"
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {/* Divider */}

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10" />

                <span className="text-xs text-gray-500">OR</span>

                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Self Description */}

              <div>
                <label className="block text-sm mb-3">
                  Quick Self Description
                </label>

                <textarea
                  onChange={(e) => setSelfDescription(e.target.value)}
                  className="w-full h-28 rounded-xl bg-[#181818] border border-white/10 p-4 text-sm resize-none outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  placeholder="Briefly describe experience..."
                />
              </div>

              {/* Info */}

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4 text-sm text-blue-300">
                Either a <strong>Resume</strong> or a
                <strong> Self Description </strong>
                is required.
              </div>
            </div>
          </div>

          {/* Footer */}

          <div className="border-t border-white/10 p-5 flex flex-col md:flex-row gap-4 justify-between items-center">
            <span className="text-gray-500 text-sm">
              AI Strategy Generation • Approx 30s
            </span>

            <button
              onClick={handleGenerateReport}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 font-medium hover:scale-[1.02] transition"
            >
              Generate My Interview Strategy
            </button>
          </div>
        </div>

        {/* Recent Reports */}

        {reports.length > 0 && (
          <section className="mx-auto max-w-7xl mt-10">
            <h2 className="font-bold text-2xl mb-6">Recent Plans</h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {reports.map((report) => (
                <div
                  key={report._id}
                  onClick={() => navigate(`/interview/${report._id}`)}
                  className="cursor-pointer rounded-2xl bg-[#111111] border border-white/10 p-5 hover:border-red-500 transition"
                >
                  <h3 className="font-semibold">
                    {report.title || "Untitled Position"}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </p>

                  <p className="mt-4 text-red-400 font-semibold">
                    Match Score:
                    {report.matchScore}%
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
