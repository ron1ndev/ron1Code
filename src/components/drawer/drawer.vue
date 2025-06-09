<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible:{
    type:Boolean,
    required:true
  },
  drawerClass:{
    type:String,
    default:null
  }
})

const emit = defineEmits(['close'])

const closeModal= ()=>{
 emit('close')
}


</script>

<template>

  <div class="drawer"
  :class="drawerClass"
  @click.self="closeModal"
  v-if="isVisible">
      <div class="drawer__content">
        <slot></slot>
        <div class="drawer__close"
        @click="closeModal">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L1 11M1 1L11 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>
  </div>

</template>

<style lang="scss" scoped>

.drawer{

  position: fixed;
  inset: 0;
  background: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  align-items:center;
  justify-content: center;
  z-index: 100;

  &__content{
    padding: 20px;
    width: 90%;
    max-width: 600px;
    height: 100%;
    max-height: 400px;
    background: rgba($color: #7a7a7a, $alpha: 0.1);
    color:#fff;
    border-radius:16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px); 
    -webkit-backdrop-filter: blur(8px); 
    position: relative;
  }
  &__close{
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items:center;
    justify-content: center;
  }
}
</style>