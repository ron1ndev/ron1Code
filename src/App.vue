<script setup>
import Loader from './components/loader/loader.vue';
import { onMounted, onUnmounted, ref} from 'vue';
import { useDesktopStore } from '@/store/desktop'
const store = useDesktopStore()

const isLoading = ref(true)

let idInterval = null


onMounted(()=>{
  document.documentElement.classList.add(`theme-${store.themeMode}`)
  window.addEventListener('load',()=>{
    idInterval = setTimeout(()=>{
        isLoading.value = false
    },1000)
  })
})

onUnmounted(()=>{
  clearTimeout(idInterval)
})

</script>

<template>
   <div class="wrapper">
     <Loader v-if="isLoading"/>
     <router-view v-else/>
   </div>
</template>

<style scoped></style>
