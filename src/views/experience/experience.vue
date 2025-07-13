<script setup>
import Header from '@/components/header/header.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import ExperienceItem from '../experience/experience-item/experience-item.vue'
import { computed } from 'vue';

import { useI18n } from 'vue-i18n'

const { locale, messages } = useI18n()

const experiences = computed(() => messages.value[locale.value].experiences)


// const experiences = [
//   {
//     subtitle: 'Фриланс',
//     title:'Верстальщик',
//     items:[
//       'Вёрстка и редизайн отдельных страниц для сайта университета.',
//       'Верстка адаптивных лендингов под заказ'
//     ],
//     year: '2020',
//   },
//   {
//     subtitle: 'Компания Sima-land',
//     title:'Верстальщик',
//     items:[
//       'Разработка и поддержка адаптивных писем и лендингов с использованием HTML/CSS/JS.',
//       'Верстка и доработка лендингов на основе макетов, включая адаптацию под мобильные устройства.',
//       'Настройка и интеграция автоматических писем с платформами рассылок.',
//       'Тестирование кросс-браузерной и кросс-клиентской совместимости.',
//     ],
//     year: '2021',
//   },
//   {
//     subtitle: 'Компания Sima-land',
//     title:'Технический специалист CRM маркетинга',
//     items:[
//       'Составление ТЗ для разработчиков 1С и интеграция систем.',
//       'Ведение проектов по интеграции email, push и SMS-рассылок.',
//       'Сегментация клиентской базы для персонализированных рассылок.',
//       'Разработка и поддержка автоматических писем и уведомлений.',
//       'Настройка сценариев рассылок и динамического контента через платформу Mindbox',
//       'Интеграция с API для автоматизации рассылок и данных.',
//       'Взаимодействие с разработчиками и менеджерами проектов.',
//     ],
//     year: '2022-2024',
//   },
//   {
//     subtitle: 'Web-студия ИП Обоскалов',
//     title:'Web-разработчик Vue.js',
//     items:[
//       'Разработка адаптивных веб-приложений, интернет-магазинов, корпоративных и бизнес сайтов',
//       'Разработка компонентов с использованием Vue.js',
//       'Интеграция frontend-приложений с REST API',
//       'Работа с системами управления версиями (Git, GitHub)',
//       'Настройка маршрутизации и состояния приложения (Vue Router, Pinia, Vuex)',
//       'Создание адаптивных интерфейсов под десктоп, планшеты и мобильные устройства',
//       'Интеграция с CMS: WordPress, Bitrix',
//       'Работа с Node.js и Express для разработки простых API',
//     ],
//     year: '2024 - 2025',
//     isCurrent:true,
//   }
// ]

</script>

<template>
  <Header/>
  <main>
      <section class="experience" id="experience">
          <div class="experience__content _container">
              <div class="experience__chapter chapter-experience">

                <ExperienceItem v-for="(item,index) in experiences" :key="item.year + index"
                :experience="item"
                :index="index"/>                    
              </div>
          </div>
      </section>
      <MobileMenu/>
  </main>
</template>


<style src="./style.scss" lang="scss"></style>