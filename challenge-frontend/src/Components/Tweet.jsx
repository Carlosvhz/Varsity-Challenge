import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";

import DivButton from "./DivButton";

import "./Styles/Tweet.css";

const Tweet = ({ picture, name, content, date }) => {
  return (
    <DivButton className="Tweet">
      <div className="PictureContainer">
        <img src={picture} alt={name} className="TweetPicture" />
      </div>

      <div className="TextContainer">
        <div className="TextContainerName">{name}</div>

        <div>{content}</div>

        <div>{/* íconos */}</div>
      </div>
    </DivButton>
  );
};

export default Tweet;
