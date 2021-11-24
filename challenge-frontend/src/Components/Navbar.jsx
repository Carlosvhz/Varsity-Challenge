import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";
import DivButton from "./DivButton";

import "./Styles/Navbar.css";

const Navbar = () => {
  const { logout } = useAuth0();
  const history = useNavigate();

  return (
    <Container className="NavbarContainer" fluid>
      <Row>
        <Col>
          <DivButton className="NavbarTitle">Tuiter</DivButton>
        </Col>

        <Col id="LogoutText">
          <DivButton
            onClick={() => {
              logout();
              history.push("/");
            }}
          >
            LogOut
          </DivButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
