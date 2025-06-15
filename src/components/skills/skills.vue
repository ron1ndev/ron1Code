<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  skills:{
    type: Array,
    requier:true
  }
})

const newSkills = [...props.skills]

const images = import.meta.glob('@/assets/img/skills/*.{png,svg}', {
  eager: true,
  as: 'url'
})


newSkills.forEach(skill => {
  skill.path = images[`/src/assets/img/skills/${skill.file}`]
})

</script>

<template>
  <div class="skills">
    <div class="skills__content">
        <!-- <div class="skills__title title">Skills</div> -->
         <div class="skills__slider">
          <div class="skills__track">
            <ul class="skills__list">
                <li class="skills__item" v-for="skill in newSkills">
                    <div class="skills__img"><img :src="skill.path" :alt="skill.alt"></div>
                    <div class="skills__name">{{ skill.name }}</div>
                </li>
            </ul>
             <ul class="skills__list">
                <li class="skills__item" v-for="skill in skills">
                    <div class="skills__img"><img :src="skill.path" :alt="skill.alt"></div>
                    <div class="skills__name">{{ skill.name }}</div>
                </li>
            </ul>
          </div>
        </div>
        <!-- <div class="skills__title title-overlay">Skills</div> -->
    </div>
  </div>

</template>

<style src="./style.scss"></style>