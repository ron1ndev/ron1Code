<script setup>
import { defineOptions, defineProps } from 'vue';
defineOptions({
  name:'projectsCard'
})

const props = defineProps({
  project:{
    type:Object,
    default:()=>({})
  }
})



</script>

<template>

  <div class="projects-card">
    <div class="projects-card__wrap" :style="{'--bgGrafiend': project.background }">
      <div class="projects-card__page">
        <img :src="project.img" :alt="project.name">
      </div>
    </div>
    <div class="projects-card__name">{{ project.name }}</div>
    <div class="projects-card__type">{{ project.type }}</div>
  </div>

</template>


<style src="./style.scss" lang="scss"></style>