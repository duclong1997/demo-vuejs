<template>
  <div>
    show popup
    <button @click="closePop()">close</button>
  </div>
</template>

<script>
export default {
  name: "Popup",
  methods: {
    closePop() {
      this.$emit("close", "info");
    },
  },
  emits: ["close"],
};
</script>

<style scoped>
</style>