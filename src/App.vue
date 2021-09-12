<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Car></Car>
  <!-- teletport: mục đích xác định các component sẽ được hiển thị 
  ở tại 1 id khác với component app
   -->
  <teleport :to="'#new-index'">
    <Message></Message>
  </teleport>

  <!-- link để gọi đến route -->
  <!-- cách1: -->
  <router-link to="/">Home </router-link>
  <!-- cách 2: sử dụng name của router -->
  <router-link :to="{ name: 'Car' }">Car </router-link>
  <router-link to="/about">about </router-link>
  <router-link to="/job">job </router-link>

  <!-- navigation -->
  <button @click="rediect()">redirect</button>
  <button @click="goBack()">go back</button>
  <button @click="goForward()">go forward</button>

  <!-- nơi từng page sẽ được hiển thị -->
  <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Car from "./components/car/Car.vue";
import Message from "./components/message/Message.vue";

export default {
  name: "App",
  data() {
    return {
      name: "long",
    };
  },
  methods: {
    // di chuyến đến 1 trang
    rediect() {
      // cách 1: sử dụng name
      // this.$router.push({ name: "Car" });
      // cách 2: sử dụng với path
      this.$router.push("/car");
    },
    // lùi lại 1 page
    goBack() {
      this.$router.go(-1);
    },
    // tiến lên 1 page
    goForward() {
      this.$router.go(1);
    },
  },
  // khai bao component được sử dụng
  components: {
    HelloWorld,
    Car,
    Message,
  },
  // define value sẽ được sử dụng ở nhiều nơi
  provide() {
    return {
      username: this.name,
      pass: "123123",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#new-index {
  width: 100%;
  height: auto;
  border: 1px solid #2c3e50;
  text-align: center;
  margin: 10px 0px;
  padding: 10px;
}
</style>
