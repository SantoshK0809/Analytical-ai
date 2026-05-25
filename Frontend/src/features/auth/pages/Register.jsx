// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { useAuth } from "../hooks/useAuth";

// const Register = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const { loading, handleRegister } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await handleRegister({ username, email, password });
//       navigate("/login");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loader-container">
//         <div className="spinner"></div>
//         <p>Registering...</p>
//       </div>
//     );
//   }
//   return (
//     <main>
//       <div className="form-container">
//         <h1>Register</h1>
//         {error && <p className="error-message" style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//               type="text"
//               placeholder="Enter username"
//               id="username"
//               name="username"
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               type="email"
//               placeholder="Enter email address"
//               id="email"
//               name="email"
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               type="password"
//               placeholder="Enter password"
//               id="password"
//               name="password"
//             />
//           </div>
//           <button className="button primary-button">Register</button>
//         </form>

//         <p>
//           Already have an account ? <Link to={"/login"}> Login </Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Register;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock, User, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";

// export const Route = createFileRoute("/register")({
//   component: Register,
// });

function Register() {
  const navigate = useNavigate();
  // const [form, setForm] = useState({ name: "", email: "", password: "" });
  // const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loading, handleRegister, setLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!username || !email || !password) {
        toast.error("Please complete all fields");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }
      await handleRegister({ username, email, password });
      // setLoading(true);
      toast.success("Account created!", {
        description: `Welcome, ${username}`,
      });
      // setLoading(false);
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      // setError(err.message);
      // setLoading(false);

      const message =
        err?.response?.data?.message || err?.message || "Something went wrong";

      setError(message);

      toast.error(message);
    }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   setTimeout(() => {
  //     localStorage.setItem(
  //       "analyticsai_user",
  //       JSON.stringify({ name: username, email: email }),
  //     );
  //     toast.success("Account created!", {
  //       description: `Welcome, ${username}`,
  //     });
  //     setLoading(false);
  //     setTimeout(() => navigate("/analyze"), 600);
  //   }, 1000);
  // };

  return (
    <div className="flex text-white min-h-screen items-center justify-center bg-gradient-hero px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">
            Analytics<span className="text-primary">AI</span>
          </span>
        </Link>

        <div className="rounded-2xl border border-border bg-gradient-card p-8 shadow-elevated">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Start preparing smarter, today.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Full Name
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-border bg-input py-2.5 pl-10 pr-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border bg-input py-2.5 pl-10 pr-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full rounded-lg border border-border bg-input py-2.5 pl-10 pr-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Creating
                  account...
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
