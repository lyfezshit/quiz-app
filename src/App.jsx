import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
