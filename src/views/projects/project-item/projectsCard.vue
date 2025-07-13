<script setup>
import { defineOptions, defineProps, defineEmits } from 'vue';
defineOptions({
  name:'projectsCard'
})

const props = defineProps({
  project:{
    type:Object,
    default:()=>({})
  }
})

const emits = defineEmits(['handleOver'])

const mouseOver = (project) =>{
  emits('handleOver', project)
}



</script>

<template>

  <div class="projects-card" @mouseover="mouseOver(project)">
    <div class="projects-card__wrap" :style="{'--bgGrafiend': project.background, '--shadowColor':project.shadowColor }">
      <div class="projects-card__page">
        <img :src="project.img" :alt="project.name">
      </div>
      <div class="projects-card__icons">
          <a :href="project.linkGit" target="_blank" class="projects-card__icon" v-if="project.linkGit">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.475 0 0 4.4775 0 10C0 14.4192 2.865 18.1667 6.8375 19.4875C7.3375 19.5817 7.52083 19.2725 7.52083 19.0067C7.52083 18.7692 7.5125 18.14 7.50833 17.3067C4.72667 17.91 4.14 15.965 4.14 15.965C3.685 14.8108 3.0275 14.5025 3.0275 14.5025C2.12167 13.8825 3.0975 13.895 3.0975 13.895C4.10167 13.965 4.62917 14.925 4.62917 14.925C5.52083 16.4542 6.97 16.0125 7.54167 15.7567C7.63167 15.11 7.88917 14.6692 8.175 14.4192C5.95417 14.1692 3.62 13.3092 3.62 9.4775C3.62 8.38583 4.0075 7.49417 4.64917 6.79417C4.53667 6.54167 4.19917 5.525 4.73667 4.1475C4.73667 4.1475 5.57417 3.87917 7.48667 5.1725C8.28667 4.95 9.13667 4.84 9.98667 4.835C10.8367 4.84 11.6867 4.95 12.4867 5.1725C14.3867 3.87917 15.2242 4.1475 15.2242 4.1475C15.7617 5.525 15.4242 6.54167 15.3242 6.79417C15.9617 7.49417 16.3492 8.38583 16.3492 9.4775C16.3492 13.3192 14.0117 14.165 11.7867 14.4108C12.1367 14.7108 12.4617 15.3242 12.4617 16.2608C12.4617 17.5992 12.4492 18.6742 12.4492 18.9992C12.4492 19.2617 12.6242 19.5742 13.1367 19.4742C17.1375 18.1625 20 14.4125 20 10C20 4.4775 15.5225 0 10 0Z" fill="currentColor"/>
            </svg>
          </a>
          <a :href="project.linkWeb" target="_blank" class="projects-card__icon" v-if="project.linkWeb">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19.6169C18.627 19.6169 24 12.1169 24 12.1169C24 12.1169 18.627 4.61694 12 4.61694C5.373 4.61694 0 12.1169 0 12.1169C0 12.1169 5.373 19.6169 12 19.6169ZM12 16.6169C13.1935 16.6169 14.3381 16.1428 15.182 15.2989C16.0259 14.455 16.5 13.3104 16.5 12.1169C16.5 10.9235 16.0259 9.77888 15.182 8.93496C14.3381 8.09105 13.1935 7.61694 12 7.61694C10.8065 7.61694 9.66193 8.09105 8.81802 8.93496C7.97411 9.77888 7.5 10.9235 7.5 12.1169C7.5 13.3104 7.97411 14.455 8.81802 15.2989C9.66193 16.1428 10.8065 16.6169 12 16.6169ZM12 14.3669C12.5967 14.3669 13.169 14.1299 13.591 13.7079C14.0129 13.286 14.25 12.7137 14.25 12.1169C14.25 11.5202 14.0129 10.9479 13.591 10.526C13.169 10.104 12.5967 9.86694 12 9.86694C11.4033 9.86694 10.831 10.104 10.409 10.526C9.98705 10.9479 9.75 11.5202 9.75 12.1169C9.75 12.7137 9.98705 13.286 10.409 13.7079C10.831 14.1299 11.4033 14.3669 12 14.3669Z" fill="currentColor"/>
            </svg>
          </a>
      </div>
      <div class="projects-card__overlay" v-if="project.linkWeb || project.linkGit"></div>
    </div>
    <div class="projects-card__name">{{ project.name }}</div>
    <div class="projects-card__type">{{ project.type }}</div>
  </div>

</template>


<style src="./style.scss" lang="scss"></style>