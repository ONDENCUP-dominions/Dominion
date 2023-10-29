<script setup lang="ts">
import { useCounterStore } from '@/stores/store';
import { filename } from 'pathe/utils';
import { onMounted } from 'vue';

const store =  useCounterStore();
const router = useRouter();

onMounted(() =>{
  console.log('onMounted');
  store.gameCount = 0;
  store.count1 = 0;
  store.count2 = 0;
  store.count3 = 0;
  store.count4 = 0;
  store.allScore = 0;
})

const fileName = ['Jolteon.jpg', 'nanjamo.jpg'];

function upCount1() {
  if(store.allScore < store.gameCount + 1){
    store.count1++;
    store.allScore++;
  };
};
function downCount1(){
  if(store.count1 > 0){
    store.count1--;
    store.allScore--;
  };
}
function upCount2() {
  if(store.allScore < store.gameCount + 1){
    store.count2++;
    store.allScore++;
  };
};
function downCount2(){
  if(store.count2 > 0){
    store.count2--;
    store.allScore--;
  };
}
function upCount3() {
  if(store.allScore < store.gameCount + 1){
    store.count3++;
    store.allScore++;
  };
};
function downCount3(){
  if(store.count3 > 0){
    store.count3--;
    store.allScore--;
  };
}
function upCount4() {
  if(store.allScore < store.gameCount + 1){
    store.count4++;
    store.allScore++;
  };
};
function downCount4(){
  if(store.count4 > 0){
    store.count4--;
    store.allScore--;
  };
}
function onClickNext(){
  if(store.gameCount+1 == store.allScore){
    store.gameCount ++;
  };
  if(store.gameCount === 3){
    console.log("終了");;
    router.push({ path: "/gameresult" })
  };
}
</script>

<template>
  <div class="flex-content">
    <Button class="next-button" @click="onClickNext">Next{{ store.gameCount }}</Button>
    <img class="card" :src="fileName[store.gameCount]" />
    <CountButton class="count1-button">
      <div @click="upCount1">＋</div>
      {{ store.count1 }}
      <div @click="downCount1">－</div>
    </CountButton>
    <CountButton class="count-button">
      <div @click="upCount2">＋</div>
      {{ store.count2 }}
      <div @click="downCount2">－</div>
    </CountButton>
    <CountButton class="count-button">
      <div @click="upCount3">＋</div>
      {{ store.count3 }}
      <div @click="downCount3">－</div>
    </CountButton>
    <CountButton class="count-button">
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
.next-button{
  margin-top: 26px;
}
.card{
  background-color: gray;
  width: 130px;
  height: 180px;
  margin-top: 30px;
}
.count1-button{
  margin-top: 30px;
}
.count-button{
  margin-top: 10px;
}
</style>
  