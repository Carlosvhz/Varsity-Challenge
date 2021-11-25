import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "reactstrap";

import { getAllUserTweets } from "../api/index";
import Tweet from "./Tweet";
import useUser from "../Providers/useUser";

import "./Styles/Explore.css";

const Explore = () => {
  const { currentUser } = useUser();

  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUserTweets(currentUser._id)
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
        <Row>
          {tweets.map((item, index) => (
            <Col sm="6">
              {console.log(item)}
              <Tweet
                picture={item.creatorPicture}
                name={item.creatorName}
                content={item.content}
                date={item.createdAt}
                key={index}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Explore;
