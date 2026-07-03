import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import logo from "./assets/profile.png";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Set favicon using bundled asset (works with Vite)
function setFavicon(href) {
  try {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = href;
  } catch (e) {
    // ignore in non-browser environments
  }
}

setFavicon(logo);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
