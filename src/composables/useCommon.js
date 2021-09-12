import { ref } from "vue";

export default function useCommon(initVal = 0, stepSize = 1, nameVal = "x") {
  const count = ref(initVal);
  const nameCount = ref(nameVal);
  function changeCount() {
    count.value += stepSize;
    nameCount.value += " funny ";
  }

  return {
    count,
    changeCount,
    nameCount,
  };
}
