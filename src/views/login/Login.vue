<template>
  <div>
    <form>
      <label for="username">username:</label>
      <input id="username" name="username" v-model="username" />
      <br />
      <label for="password">password:</label>
      <input id="password" name="password" v-model="password" />
    </form>
  </div>
  <button @click="login()">Login</button>
</template>

<script>
import { FactoryService } from "../../services/factory.service";
const accountService = FactoryService.get("account");
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await accountService
        .login(this.username, this.password)
        .then((data) => {
          console.log("vao login: ", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>