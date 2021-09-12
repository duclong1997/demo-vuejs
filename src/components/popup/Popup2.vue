<template>
  <div>
    emit value 2:
    <input type="text" id="name" name="name" v-model="name" />
    <!-- two-way-binding with v-model and component -->
    two-way binding
    <input
      type="text"
      id="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <br />
    <!-- two-way-binding with v-model and component custom -->
    two-way-bind custom:
    <input type="text" id="c" :value="custom" @input="customValue($event)" />
    <button @click="send()">send</button>

    <!-- view value of slot -->
    <div class="custom-slot">
      <slot></slot>
      <slot></slot>
    </div>
    <!-- view value of slot with name -->
    <div class="custom-slot">
      <!-- slot 1 -->
      <b> header:</b> <slot name="header"> </slot>
      <br />
      <!-- slot 2 -->
      <b> body:</b> <slot name="body"></slot>
    </div>
    <!-- view value of slot props -->
    <!-- trong trường hợp component parent không cung cấp form cho slot -->
    <!-- thì slot sẽ lấy template default trong slot ở child component -->
    <div class="custom-slot">
      slot props:
      <slot name="test" :user="user"> view default {{ user.name }} </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup2",
  data() {
    return {
      name: "long",
      user: {
        name: "long",
        age: 12,
      },
    };
  },
  props: {
    modelValue: {
      type: String,
    },
    custom: {
      type: String,
    },
  },
  methods: {
    send() {
      this.$emit("sendVal", this.name);
    },
    customValue(e) {
      this.$emit("update:custom", e.target.value);
    },
  },
  emits: {
    sendVal: (val) => {
      // khong thoa man (warning)
      if (!val) {
        return false;
      }
      // thoa man
      console.log("value: ", val);
      return true;
    },
  },
};
</script>

<style scoped>
.custom-slot {
  margin: 10px 0px;
  border: 1px solid #000;
  height: auto;
}
</style>;