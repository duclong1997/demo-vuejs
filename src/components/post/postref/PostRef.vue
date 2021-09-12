<template>
  <div>
    <!-- sử dụng với attribute ref -->
    <h2 ref="elRef">Hello</h2>
  </div>
  <PostList ref="compRef"></PostList>
</template>

<script>
import PostList from "../postlist/PostList.vue";

export default {
  name: "PostRef",
  mounted() {
    // truy cập element
    console.log("value ref eleme", this.$refs.elRef);
    // truy cập component
    console.log("vlaue ref componenect", this.$refs.compRef);
  },
  components: {
    PostList,
  },
};
</script>

<style scoped>
</style>