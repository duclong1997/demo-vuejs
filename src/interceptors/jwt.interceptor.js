import authLoginModel from "../models/AuthLogin.model";
import axiosClient from "../services/AxiosClient";

export function jwtInterceptor() {
  axiosClient.interceptors.request.use((request) => {
    // add auth header with jwt if account is logged in and request is to the api url
    if (authLoginModel.getToken()) {
      request.headers.Authorization = `Bearer ${authLoginModel.getToken()}`;
    }

    return request;
  });
}
