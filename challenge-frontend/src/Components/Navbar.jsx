import React from "react";

import { Col, Row, Button, Container } from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";
import DivButton from "./DivButton";

import "./Styles/Navbar.css";

const Navbar = () => {
  const { logout } = useAuth0();

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
