import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Survey from "./pages/Survey";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Error from "./components/header/Error";
import Freelances from "./pages/freelances/Freelances";
import Results from "./pages/results/Results";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
