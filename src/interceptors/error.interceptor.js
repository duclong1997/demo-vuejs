import authLoginModel from "../models/AuthLogin.model";
import router from "../router/index";
import axiosClient from "../services/AxiosClient";

export function errorInterceptor() {
  axiosClient.interceptors.response.use(null, (error) => {
    const { response } = error;

    if (!response) {
      // network error
      console.error(error);
      return;
    }

    // check 401, 403 (unAuthen)
    if (
      [401, 403].includes(response.status) &&
      authLoginModel.isAuthenticaion()
    ) {
      authLoginModel.clearAuthen();
      router.push("/login");
    }

    const errorMessage = response.data?.message || response.statusText;
    console.error("ERROR:", errorMessage);
  });
}
