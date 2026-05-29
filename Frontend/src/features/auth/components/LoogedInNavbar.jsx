import { useState } from "react";
import {
  Bell,
  Menu,
  X,
  LayoutDashboard,
  FileText,
  Briefcase,
  History,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoggedInNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, handleLogout } = useAuth();

  const navigate = useNavigate();
  const logoutSubmit = async () => {
    await handleLogout();
    navigate("/");
    toast.success("Logout Successfull!");
  };

  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      label: "Resume Analysis",
      icon: FileText,
      path: "/analyze",
    },
    {
      label: "Interview Prep",
      icon: Briefcase,
      path: "/interview",
    },
    {
      label: "History",
      icon: History,
      path: "/history",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow transition-smooth group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Analytics<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground transition-all hover:bg-[var(--surface-elevated)] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Notification */}
            <button className="relative h-10 w-10 rounded-xl border border-border bg-[var(--surface-elevated)] flex items-center justify-center hover:border-primary/30 transition">
              <Bell className="h-4 w-4 text-muted-foreground" />

              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-border px-2 py-1.5 bg-[var(--surface-elevated)] hover:border-primary/30 transition"
              >
                {/* <img
                  src="https://i.pravatar.cc/100"
                  alt=""
                  className="h-9 w-9 rounded-lg object-cover"
                /> */}

                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">Santosh</p>

                  <p className="text-xs text-muted-foreground">Developer</p>
                </div>

                <ChevronDown
                  className={`h-4 w-4 transition ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-border bg-[#0b1220] shadow-elevated p-2">
                  <button className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5">
                    <User className="h-4 w-4" />
                    Profile
                  </button>

                  <button className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5">
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>

                  <div className="h-px bg-border my-2" />

                  <button
                    onClick={logoutSubmit}
                    className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden py-4 flex flex-col gap-2 border-t border-border">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm hover:bg-[var(--surface-elevated)]"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
