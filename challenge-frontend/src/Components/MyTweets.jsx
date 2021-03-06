import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "reactstrap";

import { getCurrentUserTweets } from "../api/index";
import Tweet from "./Tweet";
import useUser from "../Providers/useUser";

import "./Styles/Explore.css";

const MyTweets = () => {
  const { currentUser } = useUser();

  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUserTweets(currentUser._id)
      .then(({ data }) => {
        setTweets(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentUser._id]);

  return (
    <>
      {loading ? (
        <Row>
          <Col>
            <Spinner />
          </Col>
        </Row>
      ) : (
        <Row>
          {tweets.map((item, index) => (
            <Col sm="6" key={`my_tweet_${index}`}>
              <Tweet
                picture={item.creatorPicture}
                name={item.creatorName}
                content={item.content}
                date={item.createdAt}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default MyTweets;
