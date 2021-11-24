import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Spinner, Col, Row } from "reactstrap";

import "./Styles/Redirect.css";
const Redirect = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (
    <>
      <Container className="RedirectContainer" fluid>
        <Container className="Redirect">
          <Row>
            <Col>
              <Spinner> Cargando...</Spinner>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  ) : (
    <Navigate to={isAuthenticated ? "/homepage" : "/"} />
  );
};

export default Redirect;
