import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Clock, Sparkles } from "lucide-react";
import LoggedInNavbar from "../../auth/components/LoogedInNavbar";
import { useInterview } from "../hooks/useInterview";

const History = () => {
  const { reports, loading } = useInterview();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredReports = useMemo(() => {
    return reports
      .filter((report) =>
        (report.title || "").toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [reports, search]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoggedInNavbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Interview History</h1>

            <p className="text-muted-foreground mt-1">
              Access your previously generated plans
            </p>
          </div>

          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search plans..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2.5 outline-none"
            />
          </div>
        </div>

        {/* Content */}

        {loading ? (
          <div className="flex justify-center py-20">Loading...</div>
        ) : filteredReports.length === 0 ? (
          <div className="rounded-2xl border border-border p-10 text-center">
            <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />

            <h2 className="text-xl font-semibold">No Plans Found</h2>

            <p className="text-muted-foreground mt-2">
              Generate your first interview strategy.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredReports.map((report) => (
              <div
                key={report._id}
                onClick={() => navigate(`/interview/${report._id}`)}
                className="cursor-pointer rounded-2xl border border-border bg-card p-5 hover:border-primary transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    {report.title || "Untitled Position"}
                  </h3>

                  <Sparkles className="h-4 w-4 text-primary" />
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  {new Date(report.createdAt).toLocaleDateString()}
                </p>

                <p className="mt-5 font-semibold text-primary">
                  Match Score: {report.matchScore}%
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default History;
