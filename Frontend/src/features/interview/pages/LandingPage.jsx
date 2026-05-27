import { Link } from "react-router-dom";
import {
  Sparkles,
  Target,
  MessageSquare,
  Brain,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../../auth/components/Navbar";

// export const Route = createFileRoute("/")({
//   component: Landing,
// });

const features = [
  {
    icon: Target,
    title: "Match Score",
    desc: "Get a precise match percentage between your profile and the JD.",
  },
  {
    icon: MessageSquare,
    title: "Interview Questions",
    desc: "Tailored technical questions you're likely to be asked.",
  },
  {
    icon: Brain,
    title: "Behavioral Insights",
    desc: "STAR-format behavioral questions with sample frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis",
    desc: "Identify exactly what's missing from your profile.",
  },
  {
    icon: Sparkles,
    title: "Prep Plan",
    desc: "Personalized day-by-day study plan to ace the interview.",
  },
  {
    icon: CheckCircle2,
    title: "Actionable Output",
    desc: "Everything you need — nothing you don't.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen text-white bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.58_0.22_25/0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              AI-powered interview preparation
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Land your next role with{" "}
              <span className="text-gradient">AnalyticsAI</span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Paste a job description and your resume. Instantly get a match
              score, likely interview questions, skill gaps, and a personalized
              preparation plan.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/home"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105 sm:w-auto"
              >
                Start Analyzing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/register"
                className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold transition-smooth hover:bg-surface-elevated sm:w-auto"
              >
                Create free account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to prepare
          </h2>
          <p className="mt-3 text-muted-foreground">
            Powered by AI to give you a real edge in interviews.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-gradient-card p-6 transition-smooth hover:border-primary/50 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 text-center shadow-elevated sm:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.58_0.22_25/0.15),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to ace your interview?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              It takes less than 30 seconds. No credit card required.
            </p>
            <Link
              to="/home"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
            >
              Try AnalyticsAI free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AnalyticsAI. Built with care.
      </footer>
    </div>
  );
}

export default LandingPage;
