<script setup>
import Header from '@/components/header/header.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import SidebarView from './sidebar-view/sidebarView.vue';
import ProjectsCard from './project-item/projectsCard.vue'
import { ref, computed } from 'vue';

const codeIcon = '</>'

const tabs = [
  { title:'Все', slug: 'all' },
  { title:'Web-приложение', slug: 'app' },
  { title:'Интернет-магазин', slug: 'store' },
  { title:'Лендинг', slug: 'landing' },
]

import projectImg1 from '@/assets/img/projects/otask3.png'
import projectImg2 from '@/assets/img/projects/home.png'
import projectImg3 from '@/assets/img/projects/halv.png'

const projects = [
  {
    name:'O!task',
    type:'Web-приложение',
    slug:'app',
    img:projectImg1,
    background:'linear-gradient(90deg, #26C6DA 0%, #23DA9A 100%)'
  },
  {
    name:'ron1code',
    type:'Web-приложение',
    slug:'app',
    img:projectImg2,
    background:'linear-gradient(90deg, #FD1284 0%, #FD123D 100%)'
  },
  {
    name:'Halvace',
    type:'Интернет-магазин',
    slug:'store',
    img:projectImg3,
    background:'#FFE5CC'
  },
]

const activeTab = ref('all')

const filteredProjects = computed(()=>{
  return projects.filter(project=>{

    if(activeTab.value === 'all'){
      return project
    }

    return project.slug === activeTab.value

  })
})

const changeTab = (tab) => {
  activeTab.value = tab
}


</script>

<template>
  <Header/>
  <main>
      <section class="projects" id="projects">
        <div class="projects__content _container">
          <SidebarView/>
          <div class="projects__main">
            <div class="projects__icon-code">{{ codeIcon }}</div>
            <ul class="projects__tabs-controls">
              <li class="projects__tab-control" v-for="tab in tabs" :key="tab.slug" :class="{'active': activeTab === tab.slug}" @click="changeTab(tab.slug)">
                  {{ tab.title }}
              </li>
            </ul>
            <ul class="projects__list">
              <ProjectsCard v-for="item in filteredProjects"
              :key="item.img"
              :project="item"/>
            </ul>
            
          </div>
        </div>
      </section>
      <MobileMenu/>
  </main>
</template>


<style src="./style.scss" lang="scss"></style>