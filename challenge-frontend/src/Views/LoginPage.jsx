import React from "react";

import StandardLayout from "../Layouts/StandardLayout";

import "../Views/Styles/LoginPage.css";

const LoginPage = () => {
  return (
    <StandardLayout>
      <div className="container-fluid LoginPageContainer">
        <div className="container">
          <div classNam="row">
            <div className="col">
              <div id="Title">¡Bienvenido!</div>
            </div>
          </div>

          <div classNam="row">
            <div className="col">
              <div id="Title">Ingresa tu correo electrónico:</div>
            </div>
          </div>

          <div classNam="row">
            <div className="col">
              <div id="Title">
                <input type="text" />
              </div>
            </div>
          </div>

          <div classNam="row">
            <div className="col">
              <div id="Title">Ingresa tu correo contraseña:</div>
            </div>
          </div>

          <div classNam="row">
            <div className="col">
              <div id="Title">
                <input type="password" />
              </div>
            </div>
          </div>

          <div classNam="row">
            <div className="col">
              <div id="Title">
                <button>Iniciar sesión</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
};

export default LoginPage;
