<script setup>
import Loader from './components/loader/loader.vue';
import Drawer from './components/drawer/drawer.vue';
import { onMounted, onUnmounted, ref, computed} from 'vue';
import { useDesktopStore } from '@/store/desktop'
const store = useDesktopStore()

const isLoading = ref(true)

let idInterval = null

const isVisibleModal = computed(()=>{
  return store.isVisibleModal
})

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

     <template v-else>
        <router-view/>
        <Drawer @close="store.changeVisibleModal(false)" :isVisible="isVisibleModal">
        </Drawer>
     </template>
     
   </div>
</template>

<style scoped></style>
