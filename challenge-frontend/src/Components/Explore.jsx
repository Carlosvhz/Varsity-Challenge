import React, { useEffect, useState } from "react";
import { Col, Row, Container, Spinner } from "reactstrap";

import { getCurrentUserTweets } from "../api/index";
import Tweet from "./Tweet";
import useUser from "../Providers/useUser";

import "./Styles/Explore.css";

const Explore = () => {
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
  }, []);

  return (
    <>
      {loading ? (
        <Row>
          <Col>
            <Spinner />
          </Col>
        </Row>
      ) : (
        tweets.map((item, index) => (
          <Row>
            {console.log(item)}
            <Tweet
              picture={item.creatorPicture}
              name={item.creatorName}
              content={item.content}
              date={item.date}
              key={index}
            />
            ;
          </Row>
        ))
      )}
    </>
  );
};

export default Explore;
