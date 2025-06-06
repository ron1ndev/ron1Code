<script setup>
import { onMounted} from 'vue';
import { useDesktopStore } from '@/store/desktop'
const store = useDesktopStore()

console.log(store.themeMode)

onMounted(()=>{
  document.documentElement.classList.add(`theme-${store.themeMode}`)
})

</script>

<template>
   <div class="wrapper">
     <router-view />
   </div>
</template>

<style scoped>

</style>
