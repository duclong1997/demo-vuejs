<template>
  <div v-for="t in todos" :key="t.id">
    <h2>{{ t.userId }} - {{ t.id }} - {{ t.completed }} - {{ t.title }}</h2>
  </div>
</template>

<script>
import { FactoryService } from "../../services/factory.service";
const todoService = FactoryService.get("todo");

export default {
  name: "Todo",
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      await todoService
        .getAllTodo()
        .then((data) => {
          this.todos = data;
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