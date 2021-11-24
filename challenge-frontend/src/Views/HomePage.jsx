import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

import StandardLayout from "../Layouts/StandardLayout";
import { createTweet } from "../api/index";

import Tweet from "../Components/Tweet";
import useUser from "../Providers/useUser";

import "./Styles/HomePage.css";

const HomePage = () => {
  const { currentUser } = useUser;

  useEffect(() => {
    console.log("Este es el usuario logeado HOMEPAGE: ", user.email);
  }, []);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [open, setOpen] = useState(false);

  /*Tweet states*/
  const [content, setContent] = useState("");

  const body = {
    creator_name: user.nickname,
    content,
    creationDate: new Date(),
  };

  const changeValue = (e) => {
    switch (e.name) {
      case "content":
        setContent(e.value);
        break;
      default:
        break;
    }
  };

  const toggle = () => {
    setOpen(false);
    setContent("");
  };

  const handleCreate = () => {
    /*Use a regex to validate content*/
    if (content !== "") {
      createTweet(body)
        .then((result) => {
          console.log("Its alive", result);
          setOpen(false);
          setContent("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <StandardLayout>
      <Container className="HomePageContainer" fluid>
        <Container>
          <Row className="HomePageRowContainer">
            <Col>
              <p className="HomePageTitle">Página Principal</p>
            </Col>

            <Col className="HomePageButtonContainer">
              <Button
                className="HomePageButton"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Crear nuevo Tweet
              </Button>
            </Col>
          </Row>

          {/** sadawsdasdsadasdas  */}
          <Row>
            <Tweet />
          </Row>
          {/** sadawsdasdsadasdas  */}
        </Container>
      </Container>

      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>¿Qué está sucediendo?</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Input
                type="textarea"
                name="content"
                value={content}
                onChange={(e) => {
                  changeValue(e.currentTarget);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="HomePageButton"
                onClick={(e) => {
                  e.preventDefault();
                  handleCreate();
                }}
              >
                Agregar
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </StandardLayout>
  );
};

export default HomePage;
