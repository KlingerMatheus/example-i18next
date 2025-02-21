import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "../i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
      }}
    >
      <App />
    </div>
  </StrictMode>
);
