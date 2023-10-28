<script setup lang="ts">
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count } = storeToRefs(counterStore);
</script>

<template>
    <div>
      ナンジャもんじゃ
      <div>Count:{{ count }}</div>
      <button @click="increment">たすよ</button>
      <br />
      <NuxtLink to="/game">Play</NuxtLink>
    </div>
</template>

<style scoped>
</style>
  