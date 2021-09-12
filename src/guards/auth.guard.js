import authLoginModel from "../models/AuthLogin.model";

export const authGuard = (to, from, next) => {
  // authen
  if (authLoginModel.isAuthenticaion()) {
    next();
  }
  // unauthen
  else {
    next("/login");
  }
};
