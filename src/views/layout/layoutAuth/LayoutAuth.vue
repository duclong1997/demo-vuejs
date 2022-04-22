<template>
  <div>
    <Header></Header>
    <!-- nơi từng page sẽ được hiển thị -->
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../header/Header.vue";
import Footer from "../../footer/Footer.vue";

export default {
  name: "Layout auth",
  components: [Header, Footer],
};
</script>
