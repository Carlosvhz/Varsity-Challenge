import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log("esta es la ruta privada", isAuthenticated);
  }, []);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
