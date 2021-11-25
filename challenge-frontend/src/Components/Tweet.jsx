import React from "react";
import { FaShare } from "react-icons/fa";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";

import DivButton from "./DivButton";

import "./Styles/Tweet.css";

const Tweet = ({ picture, name, content, date }) => {
  const dateFormat = new Date(date);

  return (
    <DivButton className="Tweet">
      <div className="PictureContainer">
        <img src={picture} alt={name} className="TweetPicture" />
      </div>

      <div className="TextContainer">
        <div className="TextContainerName">{name}</div>

        <div>{content}</div>

        <div className="DateContainer">
          Created at:{" "}
          {dateFormat.getMonth() +
            "/" +
            dateFormat.getDate() +
            "/" +
            dateFormat.getFullYear()}
        </div>

        <div className="IconsContainer">
          <div className="IconContainer">
            <FaShare />
          </div>
          <div className="IconContainer">
            <AiFillLike />
          </div>
          <div className="IconContainer">
            <AiOutlineComment />
          </div>
        </div>
      </div>
    </DivButton>
  );
};

export default Tweet;
