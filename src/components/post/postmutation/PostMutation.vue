<template>
  <div>
    <form>
      <labe for="userId">userid</labe>
      <input id="userId" v-model="post.userId" name="userId" type="number" />
      <br />
      <label for="title">title</label>
      <input name="title" id="title" type="text" v-model="post.title" />
      <br />
      <label for="body">body</label>
      <textarea id="body" name="body" v-model="post.body"></textarea>
    </form>
    <button @click="addPost()">add</button>
  </div>
</template>

<script>
import PostModel from "../../../models/Post.model";

import { FactoryService } from "../../../services/factory.service";
const PostService = FactoryService.get("post");

export default {
  name: "PostMutation",
  data() {
    return {
      post: PostModel,
    };
  },
  methods: {
    async addPost() {
      await PostService.createPost(this.post)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
</style>