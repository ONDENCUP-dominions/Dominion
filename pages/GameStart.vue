<script setup lang="ts">
const router = useRouter();

function onClickStart(){
  router.push({ path: "/game" });
};

function onClickTop(){
  router.push({ path: "/" });
};
</script>

<template>
    <div class="flex-content">
      <Button class="start-button" @click="onClickStart">Start</Button>
      <Button class="top-button" @click="onClickTop">Top</Button>
    </div>
</template>

<style scoped>
.flex-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.start-button{
  margin-top: 230px;
}
.top-button{
  margin-top: 35px;
}
</style>
  