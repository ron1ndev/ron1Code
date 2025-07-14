<script setup>
import Header from '@/components/header/header.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import SidebarView from './sidebar-view/sidebarView.vue';
import ProjectsCard from './project-item/projectsCard.vue'

import { ref, computed, watch} from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const codeIcon = '</>'

const selectProject = ref({})

const tabs = computed(()=>{
    return [
    { title:t('projects.tabControls.all'), slug: 'all' },
    { title:t('projects.tabControls.app'), slug: 'app' },
    { title:t('projects.tabControls.store'), slug: 'store' },
    { title:t('projects.tabControls.buisnes'), slug: 'buisnes' },
    { title:t('projects.tabControls.landing'), slug: 'landing' },
  ]
})

import otaskPrewiew from '@/assets/img/projects/otaskSmall.png'
import ron1CodePreview from '@/assets/img/projects/ron1Code.png'
import halvacePreview from '@/assets/img/projects/halvace.png'
import analemmaPreview from '@/assets/img/projects/analemma.png'
import toRidePreview from '@/assets/img/projects/toRide.png'
import rentPreview from '@/assets/img/projects/rent.png'
import porshePreview from '@/assets/img/projects/porshe.png'
import romComPreview from '@/assets/img/projects/romCom.png'
import neDetiPreview from '@/assets/img/projects/neDeti.png'

const projects = computed(()=>{
  return [
    {
      name:'O!task',
      type:t('projects.typeProjects.app'),
      slug:'app',
      img:otaskPrewiew,
      background:'linear-gradient(90deg, #FFCB3D 0%, #FF601C 100%)',
      shadowColor:'#FFCB3D',
      description:t('projects.descrProjects.otask'),
      technologies:['vue','js','html','css'],
      linkGit:null,
      linkWeb:'https://otask.ru/',
    },
    {
      name:'ron1code',
      type:t('projects.typeProjects.app'),
      slug:'app',
      img:ron1CodePreview,
      description:t('projects.descrProjects.ron1code'),
      background:'linear-gradient(90deg, #FD1284 0%, #FD123D 100%)',
      shadowColor:'#FD123D',
      technologies:['vue','js','html','css'],
      linkGit:'https://github.com/ron1ndev/ron1Code',
      linkWeb:'https://ron1ndev.github.io/ron1Code/#projects',
    },
    {
      name:'Halvace',
      type:t('projects.typeProjects.store'),
      slug:'store',
      img:halvacePreview,
      background:'linear-gradient(90deg, #F27964 0%, #E47B5A 100%)',
      shadowColor:'#F27964',
      technologies:['js','html','css'],
      description:t('projects.descrProjects.halvace'),
      linkGit:'https://github.com/ron1ndev/Halvace',
      linkWeb:'https://ron1ndev.github.io/Halvace/',
    },
    {
      name:'Romkom',
      type:t('projects.typeProjects.buisnes'),
      slug:'buisnes',
      img:romComPreview,
      background:'linear-gradient(90deg, #6400E9 0%, #41A0D9 100%)',
      shadowColor:'#6400E9',
      technologies:['js','html','css'],
      description:t('projects.descrProjects.romkom'),
      linkGit:null,
      linkWeb:'https://romkom.ru/o-kompanii/',
    },
    {
      name:'Analemma',
      type:t('projects.typeProjects.store'),
      slug:'store',
      img:analemmaPreview,
      background:'linear-gradient(90deg, #005706 0%, #87E218 100%)',
      shadowColor:'#07bb7f',
      technologies:['js','html','css'],
      description:t('projects.descrProjects.analemma'),
      linkGit:null,
      linkWeb:'https://analemmatrade.ru/',
    },
    {
      name:'NeDETI',
      type:t('projects.typeProjects.store'),
      slug:'store',
      img:neDetiPreview,
      background:'linear-gradient(90deg, #26C6DA 0%, #23DA9A 100%)',
      shadowColor:'#2ef8ff',
      technologies:['js','html','css'],
      description:t('projects.descrProjects.nedeti'),
      linkGit:null,
      linkWeb:'https://nedeti.store/',
    },
    {
      name:'Rent',
      type:t('projects.typeProjects.landing'),
      slug:'landing',
      img:rentPreview,
      background:'linear-gradient(90deg, #151C2B 0%, #274384 100%)',
      shadowColor:'#151C2B',
      technologies:['js','html','css'],
      description:t('projects.descrProjects.rent'),
      linkGit:'https://github.com/ron1ndev/RentPage',
      linkWeb:'https://ron1ndev.github.io/RentPage/',
    },
    {
      name:'Porche',
      type:t('projects.typeProjects.landing'),
      slug:'landing',
      img:porshePreview,
      background:'linear-gradient(90deg, #464A63 0%, #1E1E1E 100%)',
      shadowColor:'#1E1E1E',
      technologies:['js','html','css'],
      description:t('projects.descrProjects.porche'),
      linkGit:'https://github.com/ron1ndev/AutoPorschePage',
      linkWeb:'https://ron1ndev.github.io/AutoPorschePage/',
    },
    {
      name:'TORide',
      type:t('projects.typeProjects.landing'),
      slug:'landing',
      img:toRidePreview,
      background:'linear-gradient(90deg, #040C1C 0%, #133882 100%)',
      shadowColor:'#040C1C',
      technologies:['js','html','css'],
      description:null,
      linkGit:'https://github.com/ron1ndev/toRidePage',
      linkWeb:'https://ron1ndev.github.io/toRidePage/index.html',
    },
  ]
})

const activeTab = ref('all')

const filteredProjects = computed(()=>{
  return projects.value.filter(project=>{

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

watch(projects, (newProjects)=>{

  if(selectProject?.value.slug){
    const updated = newProjects.find(p=>p.slug === selectProject.value.slug)
    if( updated ) selectProject.value = updated
  }
})



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
                <div class="projects__bestcase-title">{{ t('projects.mainSPAproject') }}</div>
                <ProjectsCard
                  :project="projects[0]"
                  @handleOver="handleOver"/>
            </div>

          </div>

          <div class="projects__main">
            <div class="projects__icon-code">{{ codeIcon }} <span>{{ filteredProjects.length  }} {{ pluralize(filteredProjects.length, [t('projects.formNameProjects.form1'), t('projects.formNameProjects.form2'), t('projects.formNameProjects.form3')]) }}</span></div>
            <ul class="projects__tabs-controls">
              <li class="projects__tab-control" v-for="tab in tabs" :key="tab.slug" :class="{'active': activeTab === tab.slug}" @click="changeTab(tab.slug)">
                  {{ tab.title }}
              </li>
            </ul>
            <div class="projects__content-list" :style="{paddingBottom: filteredProjects.length > 2 ? '100px' : '10px'}">

           
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