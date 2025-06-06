import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

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
      }
    }
  }
  
})

const pinia  = createPinia()

const app = createApp(App)


app.use(i18n)
app.use(router)
app.use(pinia)




app.mount('#app')
