<script setup>
import Header from '@/components/header/header.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import SidebarView from './sidebar-view/sidebarView.vue';
import ProjectsCard from './project-item/projectsCard.vue'
import { ref, computed, reactive} from 'vue';

const codeIcon = '</>'

const selectProject = ref({})

const tabs = [
  { title:'Все', slug: 'all' },
  { title:'Web-приложение', slug: 'app' },
  { title:'Интернет-магазин', slug: 'store' },
  { title:'Лендинг', slug: 'landing' },
]

import projectImg1 from '@/assets/img/projects/otask3.png'
import projectImg2 from '@/assets/img/projects/home.png'
import projectImg3 from '@/assets/img/projects/halv2.png'

const projects = [
  {
    name:'O!task',
    type:'Web-приложение',
    slug:'app',
    img:projectImg1,
    background:'linear-gradient(90deg, #26C6DA 0%, #23DA9A 100%)',
    description:'Таск-трекер, CRM, база знаний и учет финансов в одной системе. Российская система управления компанией',
    technologies:['vue','js','html','css'],
    linkGit:null,
    linkWeb:'https://otask.ru/',
  },
  {
    name:'ron1code',
    type:'Web-приложение',
    slug:'app',
    img:projectImg2,
    description:'Приложение портфолио, с показом свои работ, опыта и навыков',
    background:'linear-gradient(90deg, #FD1284 0%, #FD123D 100%)',
    technologies:['vue','js','html','css'],
    linkGit:'https://github.com/ron1ndev/ron1Code',
    linkWeb:'https://ron1ndev.github.io/ron1Code/#projects',
  },
  {
    name:'Halvace',
    type:'Интернет-магазин',
    slug:'store',
    img:projectImg3,
    background:'#FFE5CC',
    technologies:['js','html','css'],
    description:'Интернет магазин для интерьера для дома и не только',
    linkGit:'https://github.com/ron1ndev/Halvace',
    linkWeb:'https://ron1ndev.github.io/Halvace/',
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

const handleOver = (project) =>{
  selectProject.value = project
}



</script>

<template>
  <Header/>
  <main>
      <section class="projects" id="projects">
        <div class="projects__content _container">
          <SidebarView
          :project="selectProject"/>
          
          <div class="projects__main">
            <div class="projects__icon-code">{{ codeIcon }} <span>{{ filteredProjects.length }}</span></div>
            <ul class="projects__tabs-controls">
              <li class="projects__tab-control" v-for="tab in tabs" :key="tab.slug" :class="{'active': activeTab === tab.slug}" @click="changeTab(tab.slug)">
                  {{ tab.title }}
              </li>
            </ul>
            <ul class="projects__list">
              <ProjectsCard v-for="item in filteredProjects"
              :key="item.img"
              :project="item"
              @handleOver="handleOver"/>
            </ul>
            
          </div>
        </div>
      </section>
      <MobileMenu/>
  </main>
</template>


<style src="./style.scss" lang="scss"></style>