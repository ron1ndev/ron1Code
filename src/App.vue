<script setup>
import { ref, onMounted } from 'vue';

const themeMode = ref('dark')

onMounted(()=>{

  document.documentElement.classList.add(`theme-${themeMode.value}`)
  console.log(themeMode)
})


</script>

<template>
   <div class="wrapper">
     <router-view />
   </div>
</template>

<style scoped>

</style>
