<script setup lang="ts">
import { ref ,onMounted } from 'vue';

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

function adjustCount(countType: 'count1' | 'count2' | 'count3' | 'count4', direction: 'up' | 'down') {
  if (direction === 'up' && store.allScore < store.gameCount + 1) {
    store[countType]++;
    store.allScore++;
  } else if (direction === 'down' && store[countType] > 0) {
    store[countType]--;
    store.allScore--;
  }
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
      <div @click="adjustCount('count1', 'up')">＋</div>
      {{ store.count1 }}
      <div @click="adjustCount('count1', 'down')">－</div>
    </CountButton>

    <CountButton class="count-button">
      <div @click="adjustCount('count2', 'up')">＋</div>
      {{ store.count2 }}
      <div @click="adjustCount('count2', 'down')">－</div>
    </CountButton>
    <CountButton class="count-button">
      <div @click="adjustCount('count3', 'up')">＋</div>
      {{ store.count3 }}
      <div @click="adjustCount('count3', 'down')">－</div>
    </CountButton>
    <CountButton class="count-button">
      <div @click="adjustCount('count4', 'up')">＋</div>
      {{ store.count4 }}
      <div @click="adjustCount('count4', 'down')">－</div>
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
  