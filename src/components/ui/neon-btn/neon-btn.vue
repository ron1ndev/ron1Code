<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

type Props = {
  background:string
}

const props = withDefaults(defineProps<Props>(),{
  background:'#03e9f4'
})

const emits = defineEmits(['handleClick'])

const handleClick = () =>{
    emits('handleClick')
}

</script>

<template>
  <div class="neon-btn" :style="{'--neon-bg':props.background}" @click="handleClick">
    <a href="#">
     <slot></slot>
    </a>
  </div>
</template>


<style lang="scss" scoped>
.neon-btn{
    display: flex;
    align-items:center;
    justify-content: center;

    a {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    margin: 40px 0px 0px 0px;
    transition: 0.5s;
    letter-spacing: 1px;
    color: #0f0f0f  ;
    background: var(--neon-bg);
    font-weight: 600;
    border-radius:8px;
    min-width: 216px;
    text-align: center;
    animation: neon 5s ease-in-out infinite alternate;
    border:1px solid var(--neon-bg);

  }

  @keyframes neon{
    0% {
      box-shadow: 0 0 5px var(--neon-btn-shadow), 0 0 10px var(--neon-btn-shadow), 0 0 40px var(--neon-btn-shadow);
    }
    50% {
      box-shadow: 0 0 20px var(--neon-btn-shadow), 0 0 40px var(--neon-btn-shadow), 0 0 80px var(--neon-btn-shadow);
    }
    100% {
      box-shadow: 0 0 5px var(--neon-btn-shadow), 0 0 10px var(--neon-btn-shadow), 0 0 40px var(--neon-btn-shadow);
    }
  }
  a:hover {
    box-shadow: 0 0 10px var(--neon-btn-shadow), 0 0 40px var(--neon-btn-shadow), 0 0 80px var(--neon-btn-shadow);
    transition: 0.5s ease-in-out;

  }
}
</style>