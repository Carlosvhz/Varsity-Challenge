import React from "react";
import { useNavigate } from "react-router-dom";
import StandardLayout from "../Layouts/StandardLayout";

import { useAuth0 } from "@auth0/auth0-react";

import "../Views/Styles/LoginPage.css";

const LoginPage = () => {
  let navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="container-fluid LoginPageContainer">
        <div className="container LoginPageFormContainer">
          <div className="row">
            <div className="col">
              <div id="Title">¡Bienvenido!</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div id="Title">
                <button
                  className="LoginButton"
                  onClick={(e) => {
                    e.preventDefault();
                    loginWithRedirect()
                      .then(() => {
                        navigate.push("/homepage");
                      })
                      .catch((e) => {
                        console.log("error :c ", e);
                      });
                  }}
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div id="LoginText"> ¿No tienes una cuenta? </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div id="Title">
                <button
                  className="SignUpButton"
                  onClick={(e) => {
                    e.preventDefault();
                    loginWithRedirect({
                      screen_hint: "signup",
                    })
                      .then(() => {
                        navigate.push("/homepage");
                      })
                      .catch((e) => {
                        console.log("error :c ", e);
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
    </>
  );
};

export default LoginPage;
