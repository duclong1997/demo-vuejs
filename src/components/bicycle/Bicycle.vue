<template>
  <!-- khi parent truyền cho child attribute none-props
    thì root node sẽ nhận giá trị đó (ngoại trừ template)
    nếu không có root node thì sẽ không nhận
 -->
  <div>
    view bicycle: {{ name }}
    <!-- none-props  -->

    <!-- nhận value from none-props -->
    <h1 v-bind="$attrs">none-props</h1>
    <!-- inject value from provide -->
    <h1>value inject: {{ username }} - {{ pass }} - {{ send }}</h1>
    <!-- emit value 
        send from child -> parent component
    -->
    <Popup @close="reveive($event)"></Popup>

    <Popup2
      @sendVal="reveive($event)"
      v-model="valuex"
      v-model:custom="valueCus"
    ></Popup2>
    <h1>value v-model: {{ valuex }}</h1>
    <h1>value v-model:custom : {{ valueCus }}</h1>

    <!-- slot: giúp xác đinh phần content bên trong child component sẽ hiển thị -->
    <Popup2>
      view detail of slot
      <template v-slot:header>value header </template>

      <template v-slot:body>value body</template>
    </Popup2>

    <!-- slot props: được sử dụng như là 1 cách parent sẽ cung cấp form cho value của child component -->
    <Popup2>
      <template v-slot:test="slotProps">
        <h1>view {{ slotProps?.user?.name }} - {{ slotProps?.user?.age }}</h1>
      </template>
    </Popup2>
  </div>
</template>

<script>
import Popup from "../popup/Popup.vue";
import Popup2 from "../popup/Popup2.vue";

export default {
  name: "Bicycle",
  data() {
    return {
      valuex: "",
      valueCus: "",
    };
  },
  // cách 2: truyền value parent -> child
  // cách này có thể define kiểu dữ liệu có yêu cầu required ?
  // giá trị default
  // type: có thể String, Number, Boolean, Object,...
  props: {
    name: {
      type: String,
      // check props cÓ required ?
      required: true,
      // trong trường hợp có required nhưng không truyền props -> error
      // nhưng nếu có thêm default: thì sẽ hết error
      default: "value default",
    },
  },
  // dùng để none-props không tự define ở root node
  inheritAttrs: false,
  methods: {
    reveive(val) {
      console.log("value emit: ", val);
    },
  },
  // nhận các value from component từ cấp cha trở lên
  inject: ["username", "pass", "send"],
  components: {
    Popup,
    Popup2,
  },
};
</script>

<style scoped>
</style>