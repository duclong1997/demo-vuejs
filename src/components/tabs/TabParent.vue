<template>
  <div class="cus-dynamic">
    dynamic component:
    <button @click="changeTab('TabA')">Tab A</button>
    <button @click="changeTab('TabB')">Tab B</button>
    <button @click="changeTab('TabC')">Tab C</button>

    <div>
      <!-- dynamic component
        with is nhận tên component -->
      <!-- keep-alive: mục đích giúp giữ cho component vẫn còn tồn tại
        nếu không có thì sau mỗi lần gọi, component sẽ bị create new 
        và tọa instance mới
        việc sử dụng keep-alive mục đích để component sẽ chỉ create 1 lần
        và khi gọi lại state vẫn không dổi
         -->
      <keep-alive>
        <component :is="nameTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TabA from "./TabA.vue";
import TabB from "./TabB.vue";
import TabC from "./TabC.vue";

export default {
  name: "TabParent",
  data() {
    return {
      nameTab: "TabA",
    };
  },
  methods: {
    changeTab(nameTab) {
      this.nameTab = nameTab;
    },
  },
  components: {
    TabA,
    TabB,
    TabC,
  },
};
</script>

<style scoped>
.cus-dynamic {
  border: 1px solid #000;
  margin: 10px 0px;
  padding: 10px 10px;
}
</style>