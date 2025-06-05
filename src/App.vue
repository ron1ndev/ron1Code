<script setup>
import { ref, onMounted } from 'vue';

const themeMode = ref('dark')

onMounted(()=>{

  document.documentElement.classList.add(`theme-${themeMode.value}`)
})


</script>

<template>
   <div class="wrapper">
     <router-view />
   </div>
</template>

<style scoped>

</style>
