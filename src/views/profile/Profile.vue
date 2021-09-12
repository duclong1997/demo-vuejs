<template>
  <div>
    id : {{ account.id }}
    <br />
    username: {{ account.username }}
    <br />
    name: {{ account.name }}
    <br />
    address: {{ account.address }}
  </div>
</template>

<script>
import { FactoryService } from "../../services/factory.service";
const accountService = FactoryService.get("account");

export default {
  name: "Profile",
  data() {
    return {
      account: {},
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    async getProfile() {
      await accountService
        .getAccount()
        .then((data) => {
          this.account = data;
          console.log("data", data);
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