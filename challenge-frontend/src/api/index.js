import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// User endpoints
export const createUser = (data) => API.post("/user/createUser", data);
export const findUser = (data) => API.post("/user/findUser", data);

// Tweet endpoints
export const createTweet = (data) => API.post("/tweet/createTweet", data);
