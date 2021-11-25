import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "reactstrap";

import { getCurrentUserTweets } from "../api/index";
import Tweet from "./Tweet";
import useUser from "../Providers/useUser";

import "./Styles/Explore.css";

const Explore = () => {
  const { currentUser } = useUser();

  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  return <Container></Container>;
};

export default Explore;
