<!--nơi chứa các html cho UI của vue -->
<template>
  <div class="vue-x">
    vue here {{ value }}
    <!-- binding text -->
    <p v-text="value"></p>
    <!-- binhding html -->
    <div v-html="valueHtml"></div>
    <!-- binding attribute -->
    <a :id="attri"> attribute </a>
    <button :disabled="valueDisable">Button disable = true</button>
    <!-- binding class with array property -->
    <p :class="[classCus, classCus1, className]">value classes</p>
    <p :class="classCl1">value class</p>
    <!-- binding style có thể array hoặc 1 property -->
    <p :style="[styleValue, styleValue1]">value style</p>
    <!-- condition -->
    <h1 v-if="valueif">condition if</h1>
    <h1 v-else-if="valueElseIf">condition else if</h1>
    <h1 v-else>condition else</h1>
    <!-- có thể sử dụng tempalte với v-if -->
    <template v-if="valueif"> view condtion in template </template>
    <!-- v-show: hiển thị element
            true: hiển thị element
            false: display: none -->
    <h1 v-show="valueif">show with v-show</h1>
    <!-- v-for: tạo vòng lặp với for in vue -->
    <!-- key: được sử dụng để idenify các node ki có sử thay đổi giữa list node cũ và mới -->
    <!-- key sẽ là giá trị unique -->
    <!-- ngoài ra giúp vue xác định được phần từ có sử thay đổi, thêm, sửa, xóa
    để có thể xử lý update UI đúng và hiệu quả  -->
    <!-- array with index in v-for -->
    <!-- value, index -->
    <div v-for="(e, index) in employees" :key="e.id">
      <h1>array: {{ index }} {{ e.name }}- {{ e.age }}</h1>
    </div>
    <!-- array with object  -->
    <!-- value, key, index -->
    <div v-for="(val, name, index) in objectEmpl" :key="index">
      <h1>object: {{ index }}-{{ name }}-{{ val }}</h1>
    </div>
    <!-- v-for with template -->
    <template v-for="(v, index) in employees" :key="index">
      <h2>{{ v.name }}</h2>
    </template>
    <!-- condition with loop -->
    <div v-for="e in element" :key="e.id">
      <h1 v-if="e.id === 1">{{ e.name }}={{ e.age }}</h1>
    </div>
    <!-- event -->
    <h1>view change: {{ valueEvent }}</h1>
    <!-- truyền param with $event -->
    <button @click="changeVal($event)">Change Value</button>
    <!-- multi method in event -->
    <button @click="changeVal($event), add()">Multi value</button>
    <!-- from in vuejs -->
    <!-- với prevent: được sử dụng tương tự như e.preventDefault(); trong method
    nhằm mục đích khi submit form không làm page bị refresh -->
    <form @submit.prevent="submitForm($event)">
      <div>
        <!-- input -->
        <!-- với trim: để loại bỏ đi khoảng trắng -->
        <!-- với number: dùng để ép giá trị của về kiểm number -->
        <!-- với lazy: dùng để property sẽ không cập nhật
        ngay lâp tức trong quá trình input
        mà khi người dùng không còn focus vào input nữa
        thì property mới thay đổi
         -->
        <label for="name">Nam</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model.trim="formValue.name"
        />
        <br />

        <!-- textarea -->
        <label for="des">Description</label>
        <textarea id="des" name="des" v-model="formValue.des" />
        <br />

        <!-- selector -->
        <label for="contry">country</label>
        <select
          id="country"
          name="country"
          v-model="formValue.country"
          class="cus-selector"
        >
          <option v-for="c in countries" :key="c.value" :value="c.value">
            {{ c.label }}
          </option>
        </select>
        <br />

        <!-- multi selector -->
        <label for="job">Jobs</label>
        <select
          id="job"
          name="job"
          multiple
          v-model="formValue.job"
          class="cus-selector"
        >
          <option v-for="j in jobs" :key="j.value" :value="j.value">
            {{ j.label }}
          </option>
        </select>
        <br />

        <!-- checkbox single-->
        <label for="agress">Agress</label>
        <input
          type="checkbox"
          id="agress"
          name="agress"
          v-model="formValue.agress"
        />
        <!-- checkbox single with value define -->
        <label for="agress1">Agress1</label>
        <input
          type="checkbox"
          id="agress1"
          name="agress1"
          true-value="yes"
          false-value="no"
          v-model="formValue.agress1"
        />
        <br />

        <!-- checkbox multi -->
        <label for="multiAgress">Agress multi</label>
        <input
          type="checkbox"
          name="one"
          id="one"
          :value="1"
          v-model="formValue.multiAgress"
        />
        <input
          type="checkbox"
          id="two"
          name="two"
          :value="2"
          v-model="formValue.multiAgress"
        />
        <input
          type="checkbox"
          id="three"
          name="three"
          :value="3"
          v-model="formValue.multiAgress"
        />
        <input
          type="checkbox"
          id="four"
          name="four"
          :value="4"
          v-model="formValue.multiAgress"
        />
        <br />

        <!-- radiobuton -->
        <label for="gender">Gender</label>
        <input
          type="radio"
          value="male"
          id="male"
          name="male"
          v-model="formValue.gender"
        />
        <input
          type="radio"
          value="female"
          id="female"
          name="female"
          v-model="formValue.gender"
        />
      </div>
      <!-- default: button in form (submit) -->
      <button>Submit</button>
    </form>

    <h1>view json {{ JSON.stringify(formValue) }}</h1>

    <!-- v-once: giữ cho thẻ html chứa property nhận giá trị tĩnh -->
    <h1 v-once>v-once {{ oneVal }}</h1>
    <!-- v-pre: nhằm mục đích bỏ qua compilation của property và tất cả property là con của nó -->
    <h1 v-pre>{{ oneVal }}</h1>
    <h1>not v-once and not v-pre {{ oneVal }}</h1>
    <!-- computed properties -->
    <h1>{{ fullName }}</h1>
    <!-- show value with computed -->
    <h1>fullname 1: {{ fullnameN }}</h1>
    <button @click="changeName()">click change name</button>
    <!-- watch -->
    <h2>view volume: {{ volume }}</h2>
    <button @click="increaseVol()">Increase Vol</button>
    <button @click="decreaseVol()">Dcrease Vol</button>
    <!-- immediate -->
    <h2>immediate: {{ valueWatchImmediate }}</h2>
    <!-- deep with object -->
    id:
    <input type="text" id="id" name="id" v-model="valueObj.id" />
    name:
    <input type="text" id="name" name="name" v-model="valueObj.name" />
    <!-- deep with array -->
    <button @click="addNew()">Add new elment</button>
  </div>
</template>

<!-- xử lý business logic của vuejs -->
<script>
export default {
  // name component
  name: "Car",
  // chứa các property của vue
  data() {
    return {
      value: "hị hị vuejs",
      valueHtml: "<b>view html</b>",
      valueAtribute: "attri",
      valueDisable: true,
      classCus: {
        "cus-class": true,
        "cus-class1": false,
      },
      className: "cus-font",
      classCus1: {
        "cus-cl": true,
      },
      classCl1: {
        "cus-cl1": true,
      },
      // có 2 cách viết cho style
      // 1: kebab-case
      // 2: PascalCase
      styleValue: {
        color: "#e91111",
        "background-color": "#2485e4",
        fontWeight: "900",
      },
      styleValue1: {
        border: " 1px solid #35495e",
      },
      valueif: true,
      valueElseIf: true,
      employees: [
        {
          id: 1,
          name: "long",
          age: 12,
        },
        {
          id: 2,
          name: "nam",
          age: 12,
        },
        {
          id: 3,
          name: "nam1",
          age: 12,
        },
        {
          id: 4,
          name: "nam1",
          age: 12,
        },
      ],
      objectEmpl: {
        id: 1,
        name: "long",
        age: 12,
      },
      valueEvent: 12,
      countries: [
        {
          value: 1,
          label: "vn",
        },
        {
          value: 2,
          label: "us",
        },
        {
          value: 3,
          label: "en",
        },
      ],
      jobs: [
        { value: 1, label: "j1" },
        { value: 2, label: "j2" },
        { value: 3, label: "j3" },
      ],
      formValue: {
        name: "",
        des: "",
        country: 0,
        jobs: [],
        agress: false,
        agress1: "no",
        multiAgress: [],
        gender: "",
      },
      oneVal: "0",
      firstName: "long",
      lastname: "Nguyen",
      volume: 0,
      valueWatchImmediate: "x",
      valueObj: {
        id: 1,
        name: "12",
      },
      arayVals: ["12", "123", "12"],
    };
  },
  // methods: định nghĩa lên các method
  // không thể dùng arrow function trong methods
  methods: {
    addNew() {
      this.arayVals.push("12");
    },
    add() {
      // process code here
    },
    changeVal(e) {
      console.log(e);
      this.valueEvent += 1;
    },
    submitForm(e) {
      console.log("event: ", e);
      // không refresh lại page
      //   e.preventDefault();
      console.log(this.formValue);
      this.oneVal = "1";
    },
    changeName() {
      // setter in computed property
      this.fullnameN = "nbasm asdasd adad";
    },
    increaseVol() {
      this.volume += 1;
    },
    decreaseVol() {
      this.volume -= 1;
    },
  },
  // computed: dùng để hiện thị property được tính toán trên các property khác
  // khi các property được xử lý trong property change
  // thì property trong computed sẽ có sự cập nhật lại
  // xử lý các tính toán phức tạp được lưu trong property computed
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastname}`;
    },
    // computed with setter và getter
    fullnameN: {
      get() {
        return `${this.firstName} ${this.lastname} 1`;
      },
      // khi sử dụng setter phải cập nhật vào các giá trị
      // được tính toán trong computed
      set(value) {
        console.log(value);
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastname = names[names.length - 1];
      },
    },
  },
  // watch: dùng đê theo dõi sự thay đổi củ property (data, computed)
  // khi property đó thay đổi.
  // method trong watch sẽ phải có tên giống với property ở data hoặc computed
  // có chứa 2 param , newValue và oldValue
  watch: {
    volume(newVal, oldVal) {
      console.log("new value: ", newVal);
      console.log("new value: ", oldVal);
      // code here
    },
    fullName(newVal, oldVal) {
      console.log("computed property new Value: ", newVal);
      console.log("computed property old Value: ", oldVal);
    },
    valueWatchImmediate: {
      handler(newVal, oldVal) {
        console.log("newVal immediate: ", newVal);
        console.log("oldval immediate: ", oldVal);
      },
      // immediate: mục đích khi instance component
      // thì thực thi handler
      immediate: true,
    },
    valueObj: {
      handler(newVal, oldVal) {
        console.log("newVal:", newVal);
        console.log("oldVal:", oldVal);
      },
      // deep: mục đích là truy cập vào chi tiết param của property
      // khi param bên trong của property bị thay đổi
      // áp dụng với property có kiểu dữ liệu (object, array)
      // thì sẽ thực hiện handler
      deep: true,
    },
    arayVals: {
      handler(newVal, oldVal) {
        console.log("newVal: ", newVal);
        console.log("oldval, ", oldVal);
      },
      deep: true,
    },
  },
};
</script>

<!--chứa style của vue js với scope: các style có phạm vi trong component này -->
<style scoped >
.vue-x {
  height: 115 px;
  border: 1px solid #2485e4;
  color: rgb(175 26 26);
}
.cus-class {
  color: rgb(217, 255, 0);
}
.cus-class1 {
  color: #11e935;
}
.cus-cl {
  font-weight: bold;
}
.cus-cl1 {
  font-weight: 100;
}
.cus-font {
  color: #e91111;
}
.cus-selector {
  width: 100px;
}
</style>