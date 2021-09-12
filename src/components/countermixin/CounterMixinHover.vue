<template>
  <div>count: {{ count }}</div>
  <button @mouseover="countVal()">add count</button>
</template>

<script>
import CommonMixin from "../../mixins/common.mixin";
export default {
  name: "CounterMixinHover",
  mixins: [CommonMixin],
};
</script>

<style scoped>
</style>