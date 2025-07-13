import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const i18n = createI18n({

  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    en: {
      hero: {
        description: 'UI for websites and applications',
        btn: 'View projects'
      },
      social:{
        label:'Сommunity'
      },
      menu:{
        projects: 'Projects',
        skills: 'Skills',
        experience: 'Experience',
        contacts: 'Contacts',
      },
      projects:{
        tabControls:{
         all:'All ',
         app: 'App',
         store: 'Store',
         buisnes:'Business',
         landing:'Landing'
        },
        formNameProjects: {
          form1:'Project',
          form2:'Projects',
          form3:'Projects',
        },
        mainSPAproject:'Main SPA project',
        typeProjects:{
          app:'App',
          store:'Store',
          buisnes:'Business',
          landing:'Landing'
        },
        descrProjects: {
          otask: 'A task tracker, CRM, knowledge base, and financial accounting in one system. A Russian company management system.',
          ron1code: 'A portfolio application showcasing your works, experience, and skills.',
          halvace: 'An online store for home interior items and more.',
          romkom: 'Organization of comprehensive supplies of various goods and materials.',
          analemma: 'Organization of comprehensive supplies of goods and materials for various purposes.',
          nedeti: 'Premium quality clothing for teenagers and children.',
          rent: 'We service and repair residential and commercial real estate according to the work we provide.',
          porche: 'Overview of Porsche Panamera.',
          toride: null
        }
      },
      technologies:{
        titleBlock:{
          mainStack:'Main stack',
          baseStack:'Base stack',
        },
        btnViewProject:'View'
      }
    },
    ru: {
      hero: {
        description: 'UI для сайтов и приложений',
        btn: 'Смотреть проекты'
      },
      social:{
        label:'Сообщества'
      },
      menu:{
        projects: 'Проекты',
        skills: 'Технологии',
        experience: 'Опыт',
        contacts: 'Контакты',
      },
      projects:{
        tabControls:{
          all:'Все ',
          app: 'Web-приложение',
          store: 'Интернет-магазин',
          buisnes:'Бизнес',
          landing:'Лендинг'
        },
        formNameProjects: {
          form1:'Проект',
          form2:'Проекта',
          form3:'Проектов',
        },
        mainSPAproject:'Главный SPA-проект',
        typeProjects:{
          app:'Web-приложение',
          store:'Интернет-магазин',
          buisnes:'Бизнес',
          landing:'Лендинг'
        },
        descrProjects:{
          otask:'Таск-трекер, CRM, база знаний и учет финансов в одной системе. Российская система управления компанией',
          ron1code:'Приложение портфолио, с показом свои работ, опыта и навыков',
          halvace:'Интернет магазин для интерьера для дома и не только',
          romkom: 'Организация комплексных поставок товаров и материалов, различного назначения',
          analemma:'Организация комплексных поставок товаров и материалов, различного назначения',
          nedeti:'Одежда для подростков и детей премиум качества',
          rent:'Обслуживаем и ремонтируем жилую и коммерческую недвижимость по предоставленным нами работам.',
          porche:'Обзор Porsch Panamera',
          toride:null
        }
      },
      technologies:{
        titleBlock:{
          mainStack:'Основной стек',
          baseStack:'Базовый стек',
        },
        btnViewProject:'Посмотреть'
      }
    }
  }
  
})

const pinia  = createPinia()

const app = createApp(App)


app.use(i18n)
app.use(router)
app.use(pinia)
app.use(ElementPlus)




app.mount('#app')
