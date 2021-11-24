import React from "react";
import { Col, Row, Container, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { findUser } from "../api/index";

import "../Views/Styles/LoginPage.css";

const LoginPage = () => {
  let navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Container className="LoginPageContainer" fluid>
        <Container className="LoginPageFormContainer">
          <Row>
            <Col>
              <div id="Title">¡Bienvenido a Tuiter!</div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                className="Button LoginButton"
                onClick={(e) => {
                  e.preventDefault();
                  loginWithRedirect();
                }}
              >
                Iniciar sesión
              </Button>
            </Col>
          </Row>

          <Row>
            <div className="col">
              <div id="LoginText"> ¿No tienes una cuenta? </div>
            </div>
          </Row>

          <Row>
            <Col>
              <Button
                className="Button SignUpButton"
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
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default LoginPage;
