import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// User endpoints
export const createUser = (data) => API.post("/user/createUser", data);
export const findUser = (email) => API.get(`/user/findUser/${email}`);

// Tweet endpoints
export const createTweet = (data) => API.post("/tweet/createTweet", data);
