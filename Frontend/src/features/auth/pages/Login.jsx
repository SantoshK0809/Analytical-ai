// import React from "react";
// import "../auth.form.scss";
// import { Link, useNavigate } from "react-router";
// import { useAuth } from "../hooks/useAuth";
// import { useState } from "react";

// const Login = () => {
//   const { loading, handleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await handleLogin({ email, password });
//       navigate("/home");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//   return (
//     // <div className="form-container skeleton">
//     //   <div className="skeleton-title"></div>
//     //   <div className="skeleton-input"></div>
//     //   <div className="skeleton-input"></div>
//     //   <div className="skeleton-button"></div>
//     // </div>
//     <div className="loader-container">
//       <div className="spinner"></div>
//       <p>Logging you in...</p>
//     </div>
//   );
// }
//   return (
//     <main>
//       <div className="form-container">
//         <h1>Login</h1>
//         {error && <p className="error-message" style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
//         <form onSubmit={handleSubmit}>
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
//           <button className="button primary-button">Login</button>
//         </form>
//         <p>
//           Don't have an account ? <Link to={"/register"}> Register </Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Login;

import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Mail, Lock, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";

// export const Route = createFileRoute("/login")({
//   component: Login,
// });

function Login() {
  // const navigate = useNavigate();
  // const [form, setForm] = useState({ email: "", password: "" });
  // const [loading, setLoading] = useState(false);

  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!email || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      await handleLogin({ email, password });
      // navigate("/home");
      toast.success("Login Successfull!", {
        description: `Welcome, ${email}`,
      });
      setTimeout(() => navigate("/home"), 1000);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }
  //   setLoading(true);
  //   setTimeout(() => {
  //     localStorage.setItem(
  //       "analyticsai_user",
  //       JSON.stringify({ email: form.email }),
  //     );
  //     toast.success("Welcome back!", {
  //       description: "Redirecting to your dashboard...",
  //     });
  //     setLoading(false);
  //     setTimeout(() => navigate("/home"), 600);
  //   }, 900);
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
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Login to continue your prep journey.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
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
                  <Loader2 className="h-4 w-4 animate-spin" /> Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
