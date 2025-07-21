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
        home: 'Home',
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
      },
      experiences: [
        {
          subtitle: 'Web Studio, IP Oboskalov',
          title: 'Vue.js Web Developer',
          items: [
            'Development of responsive web apps, e-commerce stores, and corporate websites.',
            'Component development using Vue.js.',
            'Frontend integration with REST APIs.',
            'Working with version control systems (Git, GitHub).',
            'Configuring routing and state (Vue Router, Pinia, Vuex).',
            'Creating responsive interfaces for desktop, tablet, and mobile.',
            'CMS integration: WordPress, Bitrix.',
            'Using Node.js and Express to develop simple APIs.',
          ],
          year: '2024–2025',
          isCurrent: true,
        },
        {
          subtitle: 'Sima-land Company',
          title: 'CRM Marketing Technical Specialist',
          items: [
            'Writing technical specs for 1C developers and integrating systems.',
            'Managing projects related to email, push, and SMS integration.',
            'Customer base segmentation for personalized campaigns.',
            'Development and maintenance of automated emails and notifications.',
            'Scenario setup and dynamic content via Mindbox platform.',
            'API integration for automation of mailings and data.',
            'Collaboration with developers and project managers.',
          ],
          year: '2022–2024',
        },
        {
          subtitle: 'Sima-land Company',
          title: 'Frontend Developer',
          items: [
            'Development and maintenance of responsive emails and landing pages using HTML/CSS/JS.',
            'Layout and improvement of landing pages based on mockups, including mobile adaptation.',
            'Setup and integration of automated emails with mailing platforms.',
            'Cross-browser and cross-client compatibility testing.',
          ],
          year: '2021',
        },
        {
          subtitle: 'Freelance',
          title: 'HTML/CSS Developer',
          items: [
            'Layout and redesign of individual pages for a university website.',
            'Responsive landing page development on demand.',
          ],
          year: '2020',
        },
      ],
      contacts: {
        title: 'Contacts',
        descr: 'Send a message to the email',
        inputName: 'Name',
        textAreaName: 'Message',
        btn: 'Send',
        linkDescr: 'Social media',
        messageSuccess:'Message sent!',
        copySuccess:'Copied successfully!',
        tooltip: 'Copy link',
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
        home: 'Главная',
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
      },
      experiences: [
        {
          subtitle: 'Web-студия ИП Обоскалов',
          title: 'Web-разработчик Vue.js',
          items: [
            'Разработка адаптивных веб-приложений, интернет-магазинов, корпоративных и бизнес сайтов',
            'Разработка компонентов с использованием Vue.js',
            'Интеграция frontend-приложений с REST API',
            'Работа с системами управления версиями (Git, GitHub)',
            'Настройка маршрутизации и состояния приложения (Vue Router, Pinia, Vuex)',
            'Создание адаптивных интерфейсов под десктоп, планшеты и мобильные устройства',
            'Интеграция с CMS: WordPress, Bitrix',
            'Работа с Node.js и Express для разработки простых API',
          ],
          year: '2024–2025',
          isCurrent: true,
        },
        {
          subtitle: 'Компания Sima-land',
          title: 'Технический специалист CRM маркетинга',
          items: [
            'Составление ТЗ для разработчиков 1С и интеграция систем.',
            'Ведение проектов по интеграции email, push и SMS-рассылок.',
            'Сегментация клиентской базы для персонализированных рассылок.',
            'Разработка и поддержка автоматических писем и уведомлений.',
            'Настройка сценариев рассылок и динамического контента через платформу Mindbox',
            'Интеграция с API для автоматизации рассылок и данных.',
            'Взаимодействие с разработчиками и менеджерами проектов.',
          ],
          year: '2022–2024',
        },
        {
          subtitle: 'Компания Sima-land',
          title: 'Верстальщик',
          items: [
            'Разработка и поддержка адаптивных писем и лендингов с использованием HTML/CSS/JS.',
            'Верстка и доработка лендингов на основе макетов, включая адаптацию под мобильные устройства.',
            'Настройка и интеграция автоматических писем с платформами рассылок.',
            'Тестирование кросс-браузерной и кросс-клиентской совместимости.',
          ],
          year: '2021',
        },
        {
          subtitle: 'Фриланс',
          title: 'Верстальщик',
          items: [
            'Вёрстка и редизайн отдельных страниц для сайта университета.',
            'Верстка адаптивных лендингов под заказ',
          ],
          year: '2020',
        },
      ],
      contacts:{
        title:'Контакты',
        descr:'Отправить сообщение на потчу',
        inputName:'Имя',
        textAreaName:'Сообщение',
        btn:'Отправить',
        linkDescr:'Социальные сети',
        messageSuccess:'Сообщение отправлено',
        copySuccess:'Успешно скопировано!',
        tooltip:'Копировать ссылку',
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
