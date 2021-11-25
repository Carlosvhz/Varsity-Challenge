import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_HTTPREQUEST
      : "http://localhost:5000",
});

// User endpoints
export const createUser = (data) => API.post("/user/createUser", data);
export const findUser = (email) => API.get(`/user/findUser/${email}`);

// Tweet endpoints
export const createTweet = (data) => API.post("/tweet/createTweet", data);
export const getCurrentUserTweets = (id) =>
  API.get(`/tweet/findCurrentUserTweets/${id}`);

export const getAllUserTweets = (id) =>
  API.get(`/tweet/findAllUserTweets/${id}`);
