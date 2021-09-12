const authLoginModel = {
  // property
  authentication: localStorage.getItem("token") ? true : false,
  token:
    localStorage.getItem("token") !== null
      ? localStorage.getItem("token")
      : null,
  account:
    localStorage.getItem("account") !== null
      ? JSON.parse(localStorage.getItem("account"))
      : null,

  // function
  auth(token) {
    this.authentication = true;
    this.token = token;
    localStorage.setItem("token", token);
  },

  clearAuthen() {
    this.authentication = false;
    this.token = null;
    localStorage.removeItem("token");
    this.account = null;
    localStorage.removeItem("account");
  },

  isAuthenticaion() {
    return this.authentication;
  },

  updateAuthentication(token) {
    if (token) {
      this.token = token;
      localStorage.setItem("token", token);
      this.authentication = true;
    } else {
      this.token = null;
      this.authentication = false;
      this.account = null;
      localStorage.removeItem("token");
      localStorage.removeItem("account");
    }
  },

  updateAccount(account) {
    this.account = account;
    console.log(account);
    localStorage.setItem("account", JSON.stringify(account));
  },

  getAccount() {
    return this.account;
  },

  getToken() {
    return this.token;
  },
};

export default authLoginModel;
