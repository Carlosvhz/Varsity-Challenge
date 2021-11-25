import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";

import DivButton from "./DivButton";

import "./Styles/Tweet.css";

const Tweet = ({ picture, name, content, date }) => {
  return (
    <DivButton className="TweetContainer">
      <Row>
        <Col>
          <img src={picture} alt={name} className="TweetPicture" />
        </Col>

        <Col>{name}</Col>

        <Col>
          <p className="TweetDescription">{content}</p>
        </Col>
      </Row>
    </DivButton>
  );
};

export default Tweet;
