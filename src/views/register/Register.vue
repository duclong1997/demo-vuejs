<template>
  <div>
    <form>
      <label for="name">name: </label>
      <input id="name" name="name" v-model="name" />
      <br />
      <label for="username">username: </label>
      <input id="username" name="username" v-model="username" />
      <br />
      <label for="address">address: </label>
      <input id="address" name="address" v-model="address" />
    </form>
    <button @click="register()">Register</button>
  </div>
</template>

<script>
import { FactoryService } from "../../services/factory.service";
const accountService = FactoryService.get("account");

export default {
  name: "Register",
  data() {
    return {
      username: "",
      address: "",
      name: "",
    };
  },
  methods: {
    async register() {
      await accountService
        .register(this.username, this.address, this.name)
        .then((data) => {
          console.log(data);
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