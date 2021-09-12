<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Motobike :name="msg"></Motobike>
    <!-- id: là non-props sẽ không khai báo trong props -->
    <Bicycle :name="msg" :id="msg"></Bicycle>
    <!-- slot props -->
    <Popup3>
      <template v-slot:x="slotProps">
        <h1 class="cus-con">
          -{{ slotProps.user.name }} = {{ slotProps.user.age }}
        </h1>
      </template>
    </Popup3>
    <TabParent></TabParent>

    <!-- call api http -->
    <PostList></PostList>
    <!-- ref in vue -->
    <PostRef></PostRef>

    <!-- mixin: mục đich tái sử dụng lại những option comon của component 
    khi có data ở component rồi ta cẫn có thể thêm data nữa
    nếu component có rồi thì sẽ không thêm, nếu chưa có thì bổ sung -->
    <counter-mixin-click></counter-mixin-click>
    <counter-mixin-hover></counter-mixin-hover>

    <!-- setup -->
    <SetupPosition :collectionName="'value colletion'"></SetupPosition>
    <ParentComponent></ParentComponent>
    <RefC></RefC>
  </div>
</template>

<script>
import Motobike from "./motobike/Motobike.vue";
import Bicycle from "./bicycle/Bicycle.vue";
import Popup3 from "./popup/Popup3.vue";
import TabParent from "./tabs/TabParent.vue";
import PostRef from "./post/postref/PostRef.vue";
import PostList from "./post/postlist/PostList.vue";
import CounterMixinHover from "./countermixin/CounterMixinHover.vue";
import CounterMixinClick from "./countermixin/CounterMixinClick.vue";
import SetupPosition from "./setupOpsition/SetupPosition.vue";
import ParentComponent from "./parentcomponent/ParentComponent.vue";
import RefC from "./refC/RefC.vue";

export default {
  name: "HelloWorld",
  components: {
    Motobike,
    Bicycle,
    Popup3,
    TabParent,
    PostList,
    PostRef,
    CounterMixinClick,
    CounterMixinHover,
    SetupPosition,
    ParentComponent,
    RefC,
  },
  props: {
    msg: String,
  },
  provide() {
    return { send: "hello" };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cus-con {
  color: rgb(207, 90, 22);
}
</style>
