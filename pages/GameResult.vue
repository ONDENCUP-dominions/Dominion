<script setup lang="ts">
import { useCounterStore } from '@/stores/store';
import { onMounted } from 'vue';

const store =  useCounterStore();
const router = useRouter();

onMounted(() =>{
  console.log('onMounted');
  store.winner1 = false;
  store.winner2 = false;
  store.winner3 = false;
  store.winner4 = false;

  if(store.count1 >= store.count2 && store.count1 >= store.count3 && store.count1 >= store.count4){
    store.winner1 = true;
  };
  if(store.count2 >= store.count1 && store.count2 >= store.count3 && store.count2 >= store.count4){
    store.winner2 = true;
  };
  if(store.count3 >= store.count1 && store.count3 >= store.count2 && store.count3 >= store.count4){
    store.winner3 = true;
  };
  if(store.count4 >= store.count1 && store.count4 >= store.count2 && store.count4 >= store.count3){
    store.winner4 = true;
  };
})


function onClickPlayAgain(){
  router.push({ path: "/game" });
};
function onClickFinish(){
  router.push({ path: "/" }); 
};


</script>


<template>
    <div class="flex-content">
      <div class="score1">
        <div class="score-text">1P:{{ store.count1 }}枚</div>
        <div class="winner" v-show="store.winner1">〇</div>
      </div>
      <div class="score">
        <div>2P:{{ store.count2 }}枚</div>
        <div  class="winner" v-show="store.winner2">〇</div>
      </div>
      <div class="score">
        <div>3P:{{ store.count3 }}枚</div>
        <div  class="winner" v-show="store.winner3">〇</div>
      </div>
      <div class="score">
        <div>4P:{{ store.count4 }}枚</div>
        <div class="winner" v-show="store.winner4">〇</div>
      </div>
      <Button class="again-button" @click="onClickPlayAgain">Play Again</Button>
      <Button class="finish-button" @click="onClickFinish">Finish</Button>
    </div>
</template>

<style scoped>
.flex-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.score{
  position: relative;
  font-size: 40px;
  margin-top: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  width: 200px;
}
.score1{
  position: relative;
  font-size: 40px;
  margin-top: 100px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  width: 200px;
}
.winner{
  position: absolute;
  right: 0;
}
.again-button{
  margin-top: 50px;
}
.finish-button{
  margin-top: 40px;
}
</style>
  