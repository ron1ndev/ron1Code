<script setup>
import vueIcon from '@/assets/img/skills/8.png'
import jsIcon from '@/assets/img/skills/3.png'
import htmlIcon from '@/assets/img/skills/2.png'
import csssIcon from '@/assets/img/skills/1.png'

import { defineOptions, defineProps, computed, reactive } from 'vue';
defineOptions({
  name:'sidebarView'
})

const props = defineProps({
  project:{
    type:Object,
    default:()=>({})
  }
})

const defaultCardView = reactive({
    name:'ron1code',
    type:'Web-приложение',
    slug:'app',
    description:'Приложение портфолио, с показом свои работ, опыта и навыков',
    technologies:['vue','js','html','css'],
  })


const technologies = [
  {slug:'vue', icon:vueIcon},
  {slug:'js', icon:jsIcon},
  {slug:'html', icon:htmlIcon},
  {slug:'css', icon:csssIcon},
]

const visibleTechnologies = computed(()=>{
 return technologies.filter(item=>{
    return props.project.technologies?.includes(item.slug)
  })
})

const defaultVisibleTechnologies = computed(()=>{
 return technologies.filter(item=>{
    return defaultCardView.technologies?.includes(item.slug)
  })
})


</script>

<template>
    <div class="projects__sidebar-view sidebar-view">
      <div class="sidebar-view_wrap">
        <div class="sidebar-view__name-project">{{ project.name || defaultCardView.name }}</div>
        <div class="sidebar-view__type-project">{{ project.type || defaultCardView.type }}</div>
        <div class="sidebar-view__descr-project" v-if="project.description">{{ project.description || defaultCardView.description }}</div>
        <ul class="sidebar-view__technology-list">
            <li class="sidebar-view__technology-item" v-for="item in visibleTechnologies.length ? visibleTechnologies : defaultVisibleTechnologies" :key="item.slug"><img :src="item.icon" alt=""></li>
        </ul>
      </div>
    </div>
    
</template>


<style src="./style.scss" lang="scss"></style>