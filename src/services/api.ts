import Axios from "axios";

const API_CONFIG = {
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const request = Axios.create(API_CONFIG);

export default request;
