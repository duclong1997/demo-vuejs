<template>
  <div>value props computed: {{ fullName }}</div>
  <button @click="sendData()">Send data</button>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "ChildRefC",
  setup(props, context) {
    console.log("value:", context);
    // props: composition APi with props
    const fullName = computed(() => {
      return `${props.firstName} ${[props.lastName]}`;
    });

    // context: truyền value from child -> parent
    // context có 3 giá trị: attrs, slots, emit, expose
    function sendData() {
      context.emit("send", "hello");
    }
    return {
      fullName,
      sendData,
    };
  },
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  emits: ["send"],
};
</script>

<style scoped>
</style>;