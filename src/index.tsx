import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ShinyIframeProvider } from "./components/ShinyIframeProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShinyIframeProvider>
        <App />
      </ShinyIframeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
