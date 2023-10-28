<script setup lang="ts">
import { useCounterStore } from '@/stores/store';
const store =  useCounterStore();
const router = useRouter();
function onClickPlayAgain(){
  router.push({ path: "/game" });
};
function onClickFinish(){
  router.push({ path: "/" }); 
};

</script>


<template>
    <div class="flex-content">
      <div class="score1">1P:{{ store.count1 }}枚</div>
      <div class="score">2P:{{ store.count2 }}枚</div>
      <div class="score">3P:{{ store.count3 }}枚</div>
      <div class="score">4P:{{ store.count4 }}枚</div>
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
  font-size: 40px;
  margin-top: 25px;
  font-weight: 700;
}
.score1{
  font-size: 40px;
  margin-top: 100px;
  font-weight: 700;
}
.again-button{
  margin-top: 50px;
}
.finish-button{
  margin-top: 40px;
}
</style>
  