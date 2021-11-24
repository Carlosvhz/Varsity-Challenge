import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Views/LoginPage";
import HomePage from "./Views/HomePage";

import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/homepage" element={<PrivateRoute />}>
          <Route exact path="/homepage" element={<HomePage />} />
        </Route>

        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
