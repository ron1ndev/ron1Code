<script setup>
import Drawer from '@/components/drawer/drawer.vue';
import { computed } from 'vue';
import { useDesktopStore } from '@/store/desktop';
const store = useDesktopStore()

const isVisibleModal = computed(()=>{
  return store.isVisibleModal
})

const closeModal = ()=>{
  store.changeVisibleModal(false)
}

</script>

<template>

  <Drawer @close="closeModal" 
    :isVisible="isVisibleModal"
    :drawerClass="'contacts-modal'">
    Контакты
  </Drawer>

</template>

<style lang="scss" scoped>
</style>