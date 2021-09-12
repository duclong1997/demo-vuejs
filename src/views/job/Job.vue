<template>
  <div>
    Job componenct:
    <div v-for="j in jobs" :key="j.id">
      <router-link
        :to="{
          name: 'JobDetail',
          params: {
            id: j.id,
          },
        }"
        >{{ j.name }}</router-link
      >
    </div>
    <div>
      list post:
      <div v-for="p in posts" :key="p.id">
        -<b>{{ p.title }}</b> - {{ p.body }}
      </div>
    </div>
    <div>
      <button @click="createPost()">Create post</button>
    </div>
  </div>
</template>

<script>
import { FactoryFetchService } from "../../services/fatoryFetch.service";

const postFetchService = FactoryFetchService.get("post");

export default {
  name: "Job",
  data() {
    return {
      posts: [],
      jobs: [
        {
          id: 1,
          name: "job1",
          title: "t1",
        },
        {
          id: 2,
          name: "job2",
          title: "t2",
        },
        {
          id: 3,
          name: "job3",
          title: "t3",
        },
      ],
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      await postFetchService
        .getAllPost()
        .then((data) => {
          this.posts = data;
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
    async createPost() {
      await postFetchService
        .createPost({
          userId: 1,
          body: "1231",
          title: "1231",
        })
        .then((data) => {
          console.log("data: ", data);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
};
</script>

<style scoped>
</style>