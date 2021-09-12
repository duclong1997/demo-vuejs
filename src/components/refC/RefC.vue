<template>
  <div>
    ref: {{ refVal.x }}
    <br />
    react: {{ name }}

    <input id="inputref" ref="inputRef" type="text" />
    <ChildRefC
      :firstName="'long'"
      :lastName="'nguyen'"
      @send="reveive($event)"
    ></ChildRefC>
    <br />
    valueParent: {{ valReceive }}
    <br />

    count: {{ count }} - nameCount : {{ nameCount }}
    <br />
    <button @click="changeCount()">Change count</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import ChildRefC from "./childrefc/ChildRefC.vue";
import useCommon from "../../composables/useCommon";

export default {
  name: "RefC",
  setup() {
    // Composition API
    const inputRef = ref(null);

    // beforemount
    onBeforeMount(() => {
      console.log("beforemount");
    });

    // mounted
    onMounted(() => {
      inputRef.value.focus();
      console.log("ref: ", inputRef);
      console.log("mounted");
    });

    // react
    let reactVal = reactive({ name: "1", age: "2" });
    setTimeout(() => {
      reactVal.name = "2";
    }, 2000);

    // ref
    let refVal = ref({ x: 1, y: 2 });
    setTimeout(() => {
      refVal.value.x = 2;
    }, 2000);

    const valReceive = ref("");

    // function
    function reveive(val) {
      valReceive.value = val;
    }

    // composable with composition API (reuse and frexable) giống với mixin
    const { count, changeCount, nameCount } = useCommon(1, undefined, "123");
    return {
      ...toRefs(reactVal),
      refVal,
      inputRef,
      reveive,
      valReceive,
      count,
      changeCount,
      nameCount,
    };
  },
  components: {
    ChildRefC,
  },
};
</script>

<style scoped>
</style>