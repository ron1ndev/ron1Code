<script setup>
import { useI18n } from 'vue-i18n'
import vueIcon from '@/assets/img/skills/vue.png'
import jsIcon from '@/assets/img/skills/js.png'
import htmlIcon from '@/assets/img/skills/html.png'
import csssIcon from '@/assets/img/skills/css.png'

const { t } = useI18n()

import { defineOptions, defineProps, computed } from 'vue';
defineOptions({
  name:'sidebarView'
})

const props = defineProps({
  project:{
    type:Object,
    default:()=>({})
  }
})

const technologies = [
  {slug:'vue', icon:vueIcon},
  {slug:'js', icon:jsIcon},
  {slug:'html', icon:htmlIcon},
  {slug:'css', icon:csssIcon},
]

const defaultCardView = computed(()=>{
  return {
    name:'O!task',
    type:t('projects.typeProjects.app'),
    slug:'app',
    description:t('projects.descrProjects.otask'),
    technologies:['vue','js','html','css'],
  }
})

const visibleTechnologies = computed(()=>{
 return technologies.filter(item=>{
    return props.project.technologies?.includes(item.slug)
  })
})

const defaultVisibleTechnologies = computed(()=>{
 return technologies.filter(item=>{
    return defaultCardView.value.technologies?.includes(item.slug)
  })
})


</script>

<template>
    <div class="projects__sidebar-view sidebar-view">
      <div class="sidebar-view_wrap">
        <div class="sidebar-view__name-project" :key="project.name">{{ project.name || defaultCardView.name }}</div>
        <div class="sidebar-view__type-project" :key="project.name">{{ project.type || defaultCardView.type }}</div>
        <div class="sidebar-view__descr-project" :key="project.name" v-if="project.description || defaultCardView.description">{{ project.description || defaultCardView.description }}</div>
        <ul class="sidebar-view__technology-list" :key="project.name">
            <li class="sidebar-view__technology-item" v-for="item in visibleTechnologies.length ? visibleTechnologies : defaultVisibleTechnologies" :key="item.slug"><img :src="item.icon" alt=""></li>
        </ul>
      </div>
    </div>
    
</template>


<style src="./style.scss" lang="scss"></style>