<script setup lang="ts">
const router = useRouter();
function onClickPlay(){
  router.push({ path: "/gamestart" }) 
}
</script>

<template>
    <div class="flex-content">
      <div class="title">ナンジャモンジャ</div>
      <Button class="button-position" @click="onClickPlay">Play</Button>
    </div>
</template>

<style scoped>
.flex-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title{
  margin-top: 260px;
  font-size: 40px;
}
.button-position{
  margin-top: 30px;
}
</style>
  