<script setup>
import Loader from './components/loader/loader.vue';
import ContactsModal from './components/modals/contacts-modal/contacts-modal.vue';
import { computed, onMounted, onUnmounted, ref, watch} from 'vue';
import { useDesktopStore } from '@/store/desktop'
import { useI18n } from 'vue-i18n';
const store = useDesktopStore()

const { locale } = useI18n()

const isLoading = ref(true)

let idInterval = null

const isLockBody = computed(()=>store.isLockBody)

const setLocal = () =>{
  
  const local = localStorage.getItem('locale')

  if(local){
    locale.value = local;
  }else{
    locale.value = 'ru'
  }
    
}

watch(isLockBody,(newVal)=>{
  const body = document.body
  body.classList.toggle('_lock',newVal)
})


onMounted(() => {

  setLocal()

  const themeMode = localStorage.getItem('themeMode')
  const isDark = themeMode === 'dark'

  if(themeMode){
    store.changeTheme(isDark)
    document.documentElement.classList.add(`theme-${themeMode}`);
  }else{
    store.changeTheme(isDark)
    document.documentElement.classList.add(`theme-${store.themeMode}`);
  }
  
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
