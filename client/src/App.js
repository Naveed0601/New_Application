import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import TestingPage from "./component/testingPage";


const App = () => {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testing" element={<TestingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
