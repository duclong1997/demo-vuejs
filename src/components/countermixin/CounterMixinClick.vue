<template>
  <div>count: {{ count }}</div>
  <div>x: {{ x }}</div>
  <button @click="countVal()">add count</button>
</template>

<script>
import CommonMixin from "../../mixins/common.mixin";
export default {
  name: "CounterMixinClick",
  data() {
    return {
      x: "x",
      count: 12,
    };
  },
  mixins: [CommonMixin],
  watch: {
    count(newVal, oldVal) {
      console.log("new value count:", newVal);
      console.log("old value count:", oldVal);
    },
  },
};
</script>

<style scoped>
</style>