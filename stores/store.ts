import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useCounterStore = defineStore(
  "store",
  () => {
    const count1 = ref(0);
    const count2 = ref(0);
    const count3 = ref(0);
    const count4 = ref(0);
    const allScore = ref(0);
    const gameCount = ref(0);
    const winner1 = false;
    const winner2 = false;
    const winner3 = false;
    const winner4 = false;
    return { count1, count2, count3, count4, allScore, gameCount, winner1, winner2, winner3, winner4};
  },
 );