<script setup lang="ts">
import { useCounterStore } from '@/stores/store';
const store =  useCounterStore();
function upCount1() {
    store.count1++;
};
function downCount1(){
    store.count2--;
}
function upCount2() {
    store.count2++;
};
function downCount2(){
    store.count2--;
}
function upCount3() {
    store.count3++;
};
function downCount3(){
    store.count3--;
}
function upCount4() {
    store.count4++;
};
function downCount4(){
    store.count4--;
}
</script>

<template>
  <div class="flex-content">
    <CountButton>
      <div @click="upCount1">＋</div>
      {{ store.count1 }}
      <div @click="downCount1">－</div>
    </CountButton>
    <CountButton>
      <div @click="upCount2">＋</div>
      {{ store.count2 }}
      <div @click="downCount2">－</div>
    </CountButton>
    <CountButton>
      <div @click="upCount3">＋</div>
      {{ store.count3 }}
      <div @click="downCount3">－</div>
    </CountButton>
    <CountButton>
      <div @click="upCount4">＋</div>
      {{ store.count4 }}
      <div @click="downCount4">－</div>
    </CountButton>
  </div>
</template>

<style scoped>
.flex-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
  