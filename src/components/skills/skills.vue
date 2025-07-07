<script setup lang="ts">
import { defineProps } from 'vue'

type SkillItem = {
  alt:string,
  file:string,
  name:string,
  path:string
}

type Props = {
  skills:SkillItem[]
}
const props = defineProps<Props>()

const newSkills:SkillItem[] = props.skills.map(skill=>{
  return {...skill}
})

const images:Record<string,string> = import.meta.glob('@/assets/img/skills/*.{png,svg}', {
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
         <div class="skills__slider">
          <div class="skills__track">
            <ul class="skills__list">
                <li class="skills__item" v-for="skill in newSkills">
                    <div class="skills__img"><img :src="skill.path" :alt="skill.alt"></div>
                    <div class="skills__name">{{ skill.name }}</div>
                </li>
            </ul>
             <ul class="skills__list">
                <li class="skills__item" v-for="skill in newSkills">
                    <div class="skills__img"><img :src="skill.path" :alt="skill.alt"></div>
                    <div class="skills__name">{{ skill.name }}</div>
                </li>
            </ul>
          </div>
        </div>
    </div>
  </div>

</template>

<style src="./style.scss"></style>