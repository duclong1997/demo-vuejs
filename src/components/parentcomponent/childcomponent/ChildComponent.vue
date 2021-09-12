<template>
  <div>value from provide: {{ valueCp }}</div>
  value ref by react :{{ valueRef.name }} - {{ valueRef.age }} - {{ count }} -
  {{ x }} - {{ y }}
  <button @click="changeCount()">click from child</button>
</template>

<script>
import { inject, toRefs } from "@vue/runtime-core";

export default {
  name: "ChildComponent",
  setup() {
    const valueCp = inject("valueCp", " value default");
    const valueRef = inject("valueRef", {});
    const count = inject("count", 0);
    const xy = inject("xy", {});
    // function from parent
    const changeCount = inject("changeCount");

    return {
      valueCp,
      valueRef,
      changeCount,
      count,
      ...toRefs(xy),
    };
  },
};
</script>

<style scoped>
</style>