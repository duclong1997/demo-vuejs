<template>
  <div>
    axios with api
    <button @click="showPosts()">Show list</button>
    <div v-for="p in posts" :key="p.id">
      <h2>-{{ p.title }}</h2>
      <h3>{{ p.body }}</h3>
    </div>

    <!-- create post -->
    <div>
      <PostMutation></PostMutation>
    </div>
  </div>
</template>

<script>
import PostMutation from "../postmutation/PostMutation.vue";
import { FactoryService } from "../../../services/factory.service";
const PostService = FactoryService.get("post");

export default {
  name: "PostList",
  // thực hiện page load
  // khi lần đầu tiên vào page thực hiện call api
  created() {
    this.showPosts();
  },
  // mount cũng là nơi để xử lý gọi lần đầu tiên api
  mounted() {
    // code here
  },
  data() {
    return { posts: [] };
  },
  methods: {
    // call api with async-await
    async showPosts() {
      await PostService.getAllPost()
        .then((res) => {
          console.log(res.data);
          this.posts = res.data;
        })
        .catch((e) => {
          console.log("err: ", e);
        });
    },
  },
  components: {
    PostMutation,
  },
};
</script>

<style scoped>
</style>