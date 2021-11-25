import React from "react";
import { Col, Row, Container, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "../Views/Styles/LoginPage.css";

const LoginPage = () => {
  let navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Container className="LoginPageContainer" fluid>
        <div className="LoginPageFormContainer">
          <Row>
            <Col>
              <div id="LoginTitle">Welcome to TwitterClone!</div>
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
                Log In
              </Button>
            </Col>
          </Row>

          <Row>
            <div className="col">
              <div id="LoginText">You do not have an account? </div>
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
                Create account
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
