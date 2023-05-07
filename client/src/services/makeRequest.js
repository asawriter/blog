import axios from "axios";

const makeRequest = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default makeRequest;
