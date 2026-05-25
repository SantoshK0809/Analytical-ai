import { Link, useNavigate } from "react-router-dom";
import { Sparkles, LogOut } from "lucide-react";
import { toast } from "sonner";

export default function Navbar() {
  const router = useNavigate();
  const isAuthed =
    typeof window !== "undefined" && localStorage.getItem("analyticsai_user");

  const handleLogout = () => {
    localStorage.removeItem("analyticsai_user");
    toast.success("Logged out successfully");
    router("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Analytics<span className="text-primary">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/analyze"
            className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
          >
            Analyze
          </Link>
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
          >
            Features
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {isAuthed ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground sm:inline-flex"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
