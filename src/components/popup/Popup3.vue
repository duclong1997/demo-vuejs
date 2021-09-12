<template>
  <h1 class="cus-con">prop 3:</h1>

  <div v-for="e in users" :key="e.name">
    view Detail with slot props:
    <slot name="x" :user="e"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: "long", age: 26 },
        {
          name: "nam",
          age: 12,
        },
        {
          name: "mom",
          age: 43,
        },
      ],
    };
  },
};
</script>

<!-- scoped: được sử dụng để xác định phạm vi ảnh hưởng của css 
nếu không có scoped: thì phạm vi global
-->
<style scoped>
.cus-con {
  color: rgb(38, 248, 101);
}
</style>