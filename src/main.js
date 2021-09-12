import { createApp } from "vue";
import App from "./App.vue";
import { errorInterceptor } from "./interceptors/error.interceptor";
import { jwtInterceptor } from "./interceptors/jwt.interceptor";
import router from "./router";

// enable interceptors global for http requests
jwtInterceptor();
errorInterceptor();

createApp(App)
  // add routing in app
  .use(router)
  .mount("#app");
