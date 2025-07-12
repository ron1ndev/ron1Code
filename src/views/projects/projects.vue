<script setup>
import Header from '@/components/header/header.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import SidebarView from './sidebar-view/sidebarView.vue';
import ProjectsCard from './project-item/projectsCard.vue'
import { ref, computed, reactive} from 'vue';
import { useDesktopStore } from '@/store/desktop';

const store = useDesktopStore()

const isDark = computed(()=>{
  return store.isDarkTheme
})

const codeIcon = '</>'

const selectProject = ref({})

const tabs = [
  { title:'Все', slug: 'all' },
  { title:'Web-приложение', slug: 'app' },
  { title:'Интернет-магазин', slug: 'store' },
  { title:'Бизнес', slug: 'buisnes' },
  { title:'Лендинг', slug: 'landing' },
]

import projectImg1 from '@/assets/img/projects/otask3.png'
import projectImg2 from '@/assets/img/projects/home.png'
import projectImg3 from '@/assets/img/projects/halv2.png'
import projectImg4 from '@/assets/img/projects/t3.png'
import projectImg5 from '@/assets/img/projects/toRide.png'
import projectImg6 from '@/assets/img/projects/rent.png'
import projectImg7 from '@/assets/img/projects/porshe.png'
import projectImg8 from '@/assets/img/projects/romKom2.png'
import projectImg9 from '@/assets/img/projects/deti5.png'

const projects = [
  {
    name:'O!task',
    type:'Web-приложение',
    slug:'app',
    img:projectImg1,
    background:'linear-gradient(90deg, #FFCB3D 0%, #FF601C 100%)',
    shadowColor:'#FFCB3D',
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
    shadowColor:'#FD123D',
    technologies:['vue','js','html','css'],
    linkGit:'https://github.com/ron1ndev/ron1Code',
    linkWeb:'https://ron1ndev.github.io/ron1Code/#projects',
  },
  {
    name:'Halvace',
    type:'Интернет-магазин',
    slug:'store',
    img:projectImg3,
    background:'linear-gradient(90deg, #F27964 0%, #E47B5A 100%)',
    shadowColor:'#F27964',
    technologies:['js','html','css'],
    description:'Интернет магазин для интерьера для дома и не только',
    linkGit:'https://github.com/ron1ndev/Halvace',
    linkWeb:'https://ron1ndev.github.io/Halvace/',
  },
    {
    name:'Romkom',
    type:'Бизнес',
    slug:'buisnes',
    img:projectImg8,
    background:'linear-gradient(90deg, #6400E9 0%, #41A0D9 100%)',
    shadowColor:'#6400E9',
    technologies:['js','html','css'],
    description:'Организация комплексных поставок товаров и материалов, различного назначения',
    linkGit:null,
    linkWeb:'https://romkom.ru/o-kompanii/',
  },
    {
    name:'Analemma',
    type:'Интернет-магазин',
    slug:'store',
    img:projectImg4,
    background:'linear-gradient(90deg, #005706 0%, #87E218 100%)',
    shadowColor:'#07bb7f',
    technologies:['js','html','css'],
    description:'Интернет магазин ювелирных украшений, цифровых и спортивных товаров',
    linkGit:null,
    linkWeb:'https://analemmatrade.ru/',
  },
    {
    name:'NeDETI',
    type:'Интернет-магазин',
    slug:'store',
    img:projectImg9,
    background:'linear-gradient(90deg, #26C6DA 0%, #23DA9A 100%)',
    shadowColor:'#2ef8ff',
    technologies:['js','html','css'],
    description:'Одежда для подростков и детей премиум качества',
    linkGit:null,
    linkWeb:'https://nedeti.store/',
  },
    {
    name:'Rent',
    type:'Лендинг',
    slug:'landing',
    img:projectImg6,
    background:'linear-gradient(90deg, #151C2B 0%, #274384 100%)',
    shadowColor:'#151C2B',
    technologies:['js','html','css'],
    description:'Обслуживаем и ремонтируем жилую и коммерческую недвижимость по предоставленным нами работам.',
    linkGit:'https://github.com/ron1ndev/RentPage',
    linkWeb:'https://ron1ndev.github.io/RentPage/',
  },
  {
    name:'Porche',
    type:'Лендинг',
    slug:'landing',
    img:projectImg7,
    background:'linear-gradient(90deg, #464A63 0%, #1E1E1E 100%)',
    shadowColor:'#1E1E1E',
    technologies:['js','html','css'],
    description:'Обзор Porsch Panamera',
    linkGit:'https://github.com/ron1ndev/AutoPorschePage',
    linkWeb:'https://ron1ndev.github.io/AutoPorschePage/',
  },
    {
    name:'TORide',
    type:'Лендинг',
    slug:'landing',
    img:projectImg5,
    background:'linear-gradient(90deg, #040C1C 0%, #133882 100%)',
     shadowColor:'#040C1C',
    technologies:['js','html','css'],
    description:null,
    linkGit:'https://github.com/ron1ndev/toRidePage',
    linkWeb:'https://ron1ndev.github.io/toRidePage/index.html',
  },

]

const activeTab = ref('all')

const filteredProjects = computed(()=>{
  return projects.filter(project=>{

    if(activeTab.value === 'all'){
      return true
    }else{
      return project.slug === activeTab.value
    }

  })
})

const changeTab = (tab) => {
  activeTab.value = tab
}

const handleOver = (project) =>{
  selectProject.value = project
}

const pluralize = (count, forms) => {
      const mod10 = count % 10;
      const mod100 = count % 100;

      if (mod10 === 1 && mod100 !== 11) {
        return forms[0]; 
      } else if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
        return forms[1]; 
      } else {
        return forms[2];
      }
}



</script>

<template>
  <Header/>
  <main>
      <section class="projects" id="projects">
        <div class="projects__content _container">
          <div class="projects__content-left">
            <SidebarView
            :project="selectProject"/>


            <div class="projects__bestcase">
                <div class="projects__bestcase-title">Главный SPA-проект</div>
                <ProjectsCard
                  :project="projects[0]"
                  @handleOver="handleOver"/>
            </div>

          </div>

          
          <div class="projects__main">
            <div class="projects__icon-code">{{ codeIcon }} <span>{{ filteredProjects.length  }} {{ pluralize(filteredProjects.length, ['Проект', 'Проекта', 'Проектов']) }}</span></div>
            <ul class="projects__tabs-controls">
              <li class="projects__tab-control" v-for="tab in tabs" :key="tab.slug" :class="{'active': activeTab === tab.slug}" @click="changeTab(tab.slug)">
                  {{ tab.title }}
              </li>
            </ul>
            <div class="projects__content-list" :style="{paddingBottom: filteredProjects.length > 6 ? '100px' : null}">

           
            <ul class="projects__list">
              <ProjectsCard v-for="item in filteredProjects"
              :key="item.img + activeTab"
              :project="item"
              @handleOver="handleOver"/>
            </ul>

             </div>
            
          </div>
        </div>
      </section>
      <MobileMenu/>

      <div class="glow-projects"></div>
  </main>
</template>


<style src="./style.scss" lang="scss"></style>