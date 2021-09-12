import authLoginModel from "../models/AuthLogin.model";
import { API_ENDPOINT } from "../utils/base-url.constant";
import router from "../router/index";

// header
const headers = new Headers();
headers.append("Accept", "application/json");
headers.append("content-type", "application/json");

if (authLoginModel.getToken()) {
  headers.append("Authorization", `Bearer ${authLoginModel.getToken()}`);
}

// base url
const baseDomain = API_ENDPOINT;

// GET, POST, PUT, PATCH, DELETE, OPTIONS
export const FetchCommonService = async (
  method = "GET",
  path = "",
  data = null
) => {
  const baseURL = `${baseDomain}/${path}`;

  // request
  const request = new Request(baseURL, {
    method,
    headers,
    mode: "cors",
    cache: "default",
    body: data ? JSON.stringify(data) : null,
  });

  return await fetch(request).then(handleError);
};

const handleError = (res) => {
  // response success
  if (res.ok) {
    return res.json();
  }
  // check 401, 403 (unAuthen)
  if ([401, 403].includes(res.status) && authLoginModel.isAuthenticaion()) {
    authLoginModel.clearAuthen();
    router.push("/login");
  }
  // error
  throw Error(res.statusText);
};
