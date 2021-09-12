<template>
  <!-- props -->
  <div class="custom-motobile-body">
    truyền data từ parent to child :
    <b>{{ name }}</b>
    <h1>{{ parseData }}</h1>
  </div>
</template>

<script>
export default {
  name: "Motobike",
  data() {
    return {
      val: "12321",
    };
  },
  computed: {
    parseData() {
      return `${this.name} %`;
    },
  },
  //   khai báo property từ parent to child
  // cách 1: truyền mảng tên props (nhưng có đặc điểm là không xác định kiểu dữ liệu của property props)
  props: ["name"],
};
</script>

<style scoped>
.custom-motobile-body {
  width: 100%;
  height: auto;
  border: 1px solid #2c3e50;
  margin: 10px 0px;
}
</style>