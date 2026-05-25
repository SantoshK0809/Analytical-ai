import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./style.scss";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" richColors closeButton />
    <App />
  </StrictMode>,
);
