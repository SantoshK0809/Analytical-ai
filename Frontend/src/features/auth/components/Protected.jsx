import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import { Loader2 } from "lucide-react";

const Protected = ({ children }) => {
  const { loading, user } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      // <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
      //   <Loader2 className="h-10 w-10 animate-spin text-primary" />
      //   <p className="text-muted-foreground">Loading your interview plan...</p>
      // </div>

      <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white">
        <div className="w-14 h-14 rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin mb-6" />
        <h2 className="text-xl font-semibold">Preparing Your Experience</h2>
        <p className="text-gray-400 mt-2 text-sm">
          This will only take a moment...
        </p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Protected;
