import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useCounterStore = defineStore(
  "store",
  () => {
    const count1 = ref(0);
    const count2 = ref(0);
    const count3 = ref(0);
    const count4 = ref(0);
    return { count1, count2, count3, count4 };
  },
 );