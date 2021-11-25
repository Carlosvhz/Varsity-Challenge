import React, { useState } from "react";
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
import { MdOutlineExplore } from "react-icons/md";
import { RiUserFollowLine, RiProfileLine, RiPencilLine } from "react-icons/ri";

import { createTweet } from "../api/index";
import useUser from "../Providers/useUser";
import StandardLayout from "../Layouts/StandardLayout";

import DivButton from "../Components/DivButton";
import Explore from "../Components/Explore";
import MyTweets from "../Components/MyTweets";

import "./Styles/HomePage.css";

const HomePage = () => {
  const { currentUser } = useUser();

  const { user } = useAuth0();

  const [tab, setTab] = useState("Tweets");
  const [open, setOpen] = useState(false);

  /*Tweet states*/
  const [content, setContent] = useState("");

  const body = {
    creatorId: currentUser._id,
    creatorName: user.nickname,
    creatorPicture: user.picture,
    content,
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
      <Container className="HomePage" fluid>
        <Container className="HomePageContainer">
          <Row>
            <Col className="HomePageButtonContainer">
              <DivButton
                className="HomePageButton"
                action={() => {
                  setOpen(true);
                }}
              >
                Create new Tweet <RiPencilLine />
              </DivButton>
            </Col>
          </Row>

          <Row>
            <Col sm="2">
              <Row>
                <Col>
                  <DivButton
                    className={`HomePageTitle ${
                      tab === "Explore" ? "HomePageTitleSelected" : ""
                    }`}
                    action={() => {
                      setTab("Explore");
                    }}
                  >
                    Explore <MdOutlineExplore />
                  </DivButton>
                </Col>
              </Row>
              <Row>
                <Col>
                  <DivButton
                    className={`HomePageTitle ${
                      tab === "Follows" ? "HomePageTitleSelected" : ""
                    }`}
                    action={() => {
                      setTab("Follows");
                    }}
                  >
                    Follows <RiUserFollowLine />
                  </DivButton>
                </Col>
              </Row>
              <Row>
                <Col>
                  <DivButton
                    className={`HomePageTitle ${
                      tab === "Tweets" ? "HomePageTitleSelected" : ""
                    }`}
                    action={() => {
                      setTab("Tweets");
                    }}
                  >
                    My Tweets <RiProfileLine />
                  </DivButton>
                </Col>
              </Row>
            </Col>

            <Col sm="10">
              {tab === "Follows" ? (
                <></>
              ) : tab === "Tweets" ? (
                <MyTweets />
              ) : (
                <Explore />
              )}
            </Col>
          </Row>
        </Container>
      </Container>

      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>¿What happened?</ModalHeader>
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
                Add
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </StandardLayout>
  );
};

export default HomePage;
