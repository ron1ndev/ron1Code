<script setup>
import Loader from './components/loader/loader.vue';
import ContactsModal from './components/modals/contacts-modal/contacts-modal.vue';
import { computed, onMounted, onUnmounted, ref, watch} from 'vue';
import { useDesktopStore } from '@/store/desktop'
const store = useDesktopStore()

const isLoading = ref(true)

let idInterval = null

const isLockBody = computed(()=>store.isLockBody)

watch(isLockBody,(newVal)=>{
  const body = document.body
  body.classList.toggle('_lock',newVal)
})


onMounted(() => {
  document.documentElement.classList.add(`theme-${store.themeMode}`);
  if (document.readyState === 'complete') {
    idInterval = setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  } else {
    window.addEventListener('load', () => {
      idInterval = setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    });
  }
});

onUnmounted(()=>{
  clearTimeout(idInterval)
  document.body.classList.remove('_lock')
})

</script>

<template>
   <div class="wrapper">
     <Loader v-if="isLoading"/>

     <template v-else>
        <router-view/>
        <ContactsModal/>
     </template>
     
   </div>
</template>

<style scoped></style>
