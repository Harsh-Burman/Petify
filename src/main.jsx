import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Index from "./index.jsx";
import FAQ from "./pages/faq.jsx";
import Login from "./auth/login.jsx";
import Signup from "./auth/signup.jsx";
import Output from "./pages/output.jsx";
import "boxicons/css/boxicons.min.css";
import ImgAI from "./pages/imgai.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/imgai" element={<ImgAI />} />
        <Route path="/output" element={<Output />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
