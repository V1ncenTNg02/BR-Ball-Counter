import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Report from "./pages/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
