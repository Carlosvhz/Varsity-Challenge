import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Spinner, Col, Row } from "reactstrap";

import useUser from "../Providers/useUser";

import { findUser, createUser } from "../api/index";

import "./Styles/Redirect.css";

const Redirect = () => {
  const { setCurrentUser } = useUser();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      findUser(user.email)
        .then(({ data }) => {
          setCurrentUser(data.data);
          setLoading(false);
        })
        .catch(() => {
          createUser({ nickname: user.nickname, email: user.email })
            .then(({ data }) => {
              setCurrentUser(data.data);
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  }, [user]);

  return isLoading || loading ? (
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
    <>
      <Navigate to={isAuthenticated ? "/homepage" : "/"} />
    </>
  );
};

export default Redirect;
