import React from "react";
import { LoginPage } from "./pages/LoginPage";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { MainPage } from "./pages/MainPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
