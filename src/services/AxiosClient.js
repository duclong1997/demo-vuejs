import axios from "axios";
import queryString from "querystring";
import authLoginModel from "../models/AuthLogin.model.js";
import { API_ENDPOINT } from "../utils/base-url.constant";

const baseDomain = API_ENDPOINT;
const baseURL = baseDomain;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// request
axiosClient.interceptors.request.use(async (config) => {
  // handle token here ...
  if (authLoginModel.getToken()) {
    config.headers.Authorization = `Bearer ${authLoginModel.getToken()}`;
  }

  return config;
});

// response
axiosClient.interceptors.response.use(
  (res) => {
    // if (res && res.data) {
    //   return res.data;
    // }
    return res;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;
