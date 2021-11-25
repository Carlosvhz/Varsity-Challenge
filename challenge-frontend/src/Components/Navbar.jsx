import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";

import { useAuth0 } from "@auth0/auth0-react";
import DivButton from "./DivButton";

import "./Styles/Navbar.css";

const Navbar = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <Container className="NavbarContainer" fluid>
      <Row>
        <Col>
          <DivButton className="NavbarTitle">
            Tuiter <BsChatLeftTextFill />{" "}
          </DivButton>
        </Col>
        <Col id="LogoutText">
          <DivButton
            action={() => {
              navigate("/");
              logout();
            }}
          >
            LogOut <FaSignOutAlt />
          </DivButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
