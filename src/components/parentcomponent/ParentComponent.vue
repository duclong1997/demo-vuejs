<template>
  <div class="cus-tom-parent">
    value ref react: {{ valueRef.name }} - {{ valueRef.age }} -{{ count }} -
    {{ x }} - {{ y }}
    <ChildComponent></ChildComponent>
    <button @click="changeCount()">Click from parent</button>
  </div>
</template>

<script>
import { provide, reactive, ref, toRefs } from "@vue/runtime-core";
import ChildComponent from "./childcomponent/ChildComponent.vue";

export default {
  name: "ParentComponent",
  setup() {
    let valueRef = ref({ name: "long", age: 24 });
    let xy = reactive({ x: 12, y: 3 });
    const count = ref(0);

    function changeCount() {
      count.value += 1;
    }
    // provide value from parent to child by key
    provide("valueCp", "valueParent");
    provide("valueRef", valueRef);
    provide("xy", xy);
    provide("count", count);
    // provide function from parent to child
    provide("changeCount", changeCount);

    return {
      valueRef,
      count,
      changeCount,
      ...toRefs(xy),
    };
  },
  components: {
    ChildComponent,
  },
};
</script>

<style scoped>
.cus-tom-parent {
  width: 100%;
  height: auto;
  margin: 10px 0px;
  padding: 10px;
  color: rgb(109, 22, 190);
  font-weight: 900;
}
</style>