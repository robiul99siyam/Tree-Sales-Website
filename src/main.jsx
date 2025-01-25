import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CardProvider from "./provider/CardProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CardProvider>
        <App />
      </CardProvider>
    </Router>
  </StrictMode>
);
