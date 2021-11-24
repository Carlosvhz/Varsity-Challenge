import React, { useEffect } from "react";

import { Col, Row, Container, Button, Input } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

import StandardLayout from "../Layouts/StandardLayout";
import Tweet from "../Components/Tweet";

import "./Styles/HomePage.css";

const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log("Este es el usuario logeado HOMEPAGE: ", user);
  }, []);

  return (
    <StandardLayout>
      <Container className="HomePageContainer" fluid>
        <Container>
          <Row className="HomePageRowContainer">
            <Col>
              <p className="HomePageTitle">Página Principal</p>
            </Col>

            <Col className="HomePageButtonContainer">
              <Button className="HomePageButton">Crear nuevo Tweet</Button>
            </Col>
          </Row>

          {/** sadawsdasdsadasdas  */}
          <Row>
            <Tweet />
          </Row>
          {/** sadawsdasdsadasdas  */}
        </Container>
      </Container>
    </StandardLayout>
  );
};

export default HomePage;
