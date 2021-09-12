<template>
  <div>detail job: {{ id }}</div>
  <div>
    post detail:
    {{ post.userId }}
    {{ post.title }}
  </div>
</template>

<script>
import PostModel from "../../../models/Post.model";
export default {
  name: "JobDetail",
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  data() {
    // PostModel: là object đã tồn tại trong app
    // khi có bất cứ thay đổi ở đâu
    // thì bất cứ ở đâu gọi đến PostModel sẽ nhận được value mới
    return { post: PostModel };
  },
};
</script>

<style scoped>
</style>