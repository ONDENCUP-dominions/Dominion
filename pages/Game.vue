<script setup lang="ts">
import { useCounterStore } from '@/stores/store';
import { ref, onMounted } from 'vue';
const store =  useCounterStore();
const router = useRouter();
function upCount1() {
  if(store.allScore < 60){
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
  if(store.allScore < 60){
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
  if(store.allScore < 60){
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
  if(store.allScore <60 ){
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
  store.gameCount++;
  if(store.gameCount === 36){
    console.log("終了");;
    router.push({ path: "/gameresult" })
  }
}

const allCards = Array.from({ length: 12 }, (_, i) => i + 1)
  .reduce((acc, card) => acc.concat([card, card, card]), []); // 12枚のカードを3回ずつ追加

// Fisher-Yatesアルゴリズムを使用して配列をシャッフル
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledCards = ref(shuffle([...allCards]));

const getCardImage = () => {
  const cardNumber = shuffledCards.value[store.gameCount];
  console.log(cardNumber);
  return `image${cardNumber}.png`;
};


</script>

<template>
  <div class="flex-content">
    <Button class="next-button" @click="onClickNext">Next{{ store.gameCount }}</Button>
    <img class="card" :src="getCardImage()"/>
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
  