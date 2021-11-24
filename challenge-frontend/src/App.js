import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Views/LoginPage";
import HomePage from "./Views/HomePage";
import Redirect from "./Views/Redirect";

import UserProvider from "./Providers/UserProvider";

import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route
            path="/homepage"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/redirect" element={<Redirect />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
