<template>
  <div>
    composition:
    {{ collectionName }} - {{ readersNumber }} - {{ book }}
    <br />
    <button @click="changeTytle()">change title</button>

    <!-- v-model with composition api -->
    <input type="text" id="valVR" v-model="valVR" />
    <input type="text" id="name" v-model="valref.name" />

    <!-- computed ref -->
    <input id="firstname" v-model="fullname.firstNameRef" />
    <input id="lastname" v-model="fullname.lastNameRef" />
    computed fullname: {{ reffulname }}

    <!-- watch -->
    <input id="valueName" v-model="valueName" />

    <!-- wathc react -->
    <input id="op" v-model="op.name" />
  </div>
</template>

<script>
import { ref, reactive, toRefs, toRef, computed, watch } from "vue";
import _ from "lodash";
export default {
  name: "SetupPosition",
  props: ["collectionName"],
  //   ngoài ra có thể thay context = { attrs, slots, emit }
  setup(props, context) {
    // khi giá trị props thay đổi
    // way 1: destructure
    const { collectionName } = toRefs(props);
    console.log("value to refs: ", collectionName);

    // way 2: props is options
    const valueProps = toRef(props, "collectionName");
    console.log("value to ref: ", valueProps);

    // bên trong ref() là value
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    // Attributes (Non-reactive object)
    console.log(context.attrs);

    // Slots (Non-reactive object)
    console.log(context.slots);

    // Emit Events (Method)
    console.log(context.emit);

    // function in setup
    function changeTytle() {
      book.title = "update vue 3 guid";
    }

    // v-model
    const valVR = reactive("");
    const valref = ref({ name: "" });

    // compued
    const fullname = ref({ firstNameRef: "", lastNameRef: "" });
    const reffulname = computed(function () {
      return `${fullname.value.firstNameRef} ${fullname.value.lastNameRef}`;
    });
    // watch and multi wath
    const valueName = ref("first");
    const valueNameSec = ref("second");
    watch(
      [valueName, valueNameSec],
      (newVals, oldVals) => {
        console.log("new Val ref", newVals[0]);
        console.log("old Val ref", oldVals[0]);
      },
      {
        immediate: true,
      }
    );

    // watch with react
    const reactame = reactive({
      f: "",
      l: "",
      op: {
        name: "",
      },
    });
    // watch(
    //   () => reactame.f,
    //   function (newVal, oldVal) {
    //     console.log("new va react", newVal);
    //     console.log("old va react", oldVal);
    //   }
    // );
    // cloneDeep: nhằm mục đích xác định old value and new value
    // với những property có data type là object
    watch(
      () => _.cloneDeep(reactame.op),
      function (newVal, oldVal) {
        console.log("new va react", newVal);
        console.log("old va react", oldVal);
      },
      {
        deep: true,
      }
    );

    return {
      readersNumber,
      fullname,
      reffulname,
      valueName,
      valueNameSec,
      ...toRefs(reactame),
      ...toRefs(book),
      ...toRefs(valVR),
      valref,
      changeTytle,
    };
  },
};
</script>

<style scoped>
</style>