import React from "react";

import StandardLayout from "../Layouts/StandardLayout";

import { useAuth0 } from "@auth0/auth0-react";

import "../Views/Styles/LoginPage.css";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StandardLayout>
      <div className="container-fluid LoginPageContainer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="Title">¡Bienvenido!</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div id="Title">Puedes iniciar sesión aquí</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div id="Title">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    loginWithRedirect();
                  }}
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div id="Title">Puedes crear tu cuenta aquí</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div id="Title">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    loginWithRedirect({
                      screen_hint: "signup",
                    });
                  }}
                >
                  Crear cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
};

export default LoginPage;
