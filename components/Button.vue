<script setup lang="ts">
</script>

<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
.button{
    background-color: #63F87B;
    width: 200px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #000000;
    border-radius: 0.25rem;
    font-weight: 700;
    font-size: 200%;
}
.button:hover{
    opacity: 0.7;
}

</style>
