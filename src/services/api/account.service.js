import authLoginModel from "../../models/AuthLogin.model";

const accountService = {
  // login
  login: (username, pass) => {
    console.log("username: ", username);
    console.log("password: ", pass);

    const valeAp = new Promise((resolve) => {
      resolve({
        token: "12313123123asdadadsd",
      });
    });
    valeAp.then((data) => {
      authLoginModel.auth(data.token);
    });
    return valeAp;
  },

  // register
  register: (username, address, name) => {
    const registerData = { username, address, name };
    console.log(registerData);
    return new Promise((resolve) => {
      resolve({ status: 0, message: "SUCCESS" });
    });
  },

  // logout
  logout: () => {
    authLoginModel.clearAuthen();
  },

  getAccount: () => {
    const account = new Promise((resolve) => {
      resolve({
        username: "longnd",
        name: "nguyen duc long",
        id: 1,
        address: "address 1",
      });
    });

    account.then((data) => {
      authLoginModel.updateAccount(data);
    });

    return account;
  },
};

export default accountService;
