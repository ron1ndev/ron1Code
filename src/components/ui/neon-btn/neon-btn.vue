<script setup>
import { defineProps } from 'vue';

defineProps({
  background:{
    type:String,
    default:'#03e9f4'
  }
})
</script>

<template>
  <div class="neon-btn" :style="{'--neon-bg':background}">
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
    box-shadow: var(--neon-btn-shadow);
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
      box-shadow: 0 0 5px var(--neon-bg), 0 0 10px var(--neon-bg), 0 0 40px var(--neon-bg);
    }
    50% {
      box-shadow: 0 0 20px var(--neon-bg), 0 0 40px var(--neon-bg), 0 0 80px var(--neon-bg);
    }
    100% {
      box-shadow: 0 0 5px var(--neon-bg), 0 0 10px var(--neon-bg), 0 0 40px var(--neon-bg);
    }
  }
  a:hover {
    box-shadow: 0 0 10px var(--neon-bg), 0 0 40px var(--neon-bg), 0 0 80px var(--neon-bg);
    transition: 0.5s ease-in-out;

  }
}
</style>