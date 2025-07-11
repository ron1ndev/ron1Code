<script setup>
import Header from '@/components/header/header.vue';
import SkillProgress from '@/components/skill-progress/skillProgress.vue';
import Skills from '@/components/skills/skills.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import { useDesktopStore } from '@/store/desktop';
const store = useDesktopStore()

const innerWidth = store.innerWidth

const skills = [
  {file:'10.png',name:'CSS 3',alt:'CSS 3'},
  {file:'11.png',name:'HTML 5',alt:'HTML 5'},
  {file:'12.png',name:'JavaScript',alt:'JavaScript'},
  {file:'13.png',name:'React',alt:'React'},
  {file:'14.png',name:'Vue',alt:'Vue'},
  {file:'15.png',name:'Git',alt:'Git'},
  {file:'16.png',name:'Vite',alt:'Vite'},
  {file:'17.png',name:'Gulp',alt:'Gulp'},
]

const codeIcon = '</>'
</script>

<template>
  <Header/>
  <main>
      <section class="skills" id="skills">
        <div class="skills__main-content">
          <div class="skills__left">
            <div class="skills__title-section">Главный SPA-проект</div>

            <div class="skills__card-last-project last-poject">
              <div class="last-poject__header">
                <div class="last-poject__name">O!task</div>
                <div class="last-poject__descr">Таск-трекер, CRM, база знаний и учет финансов в одной системе. Российская система управления компанией</div>
              </div>
              <div class="last-poject__content">
                <div class="last-poject__content-left">
                  <div class="last-poject__type">Web-приложение</div>
                  <ul class="last-poject__technology-list">
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/8.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/3.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/2.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/1.png" alt=""></li>
                  </ul>
                  <a href="https://otask.ru/" target="_blank" class="last-poject__btn">
                    <div class="last-poject__btn-icon">{{ codeIcon }}</div>
                    <div class="last-poject__btn-text">Посмотреть</div>
                  </a>
                </div>
                <a href="https://otask.ru/" target="_blank" class="last-poject__content-right">
                  <div class="last-poject__preview">
                    <img src="/src/assets/img/projects/0.1.png" alt="last-project">
                  </div>
                </a>
              </div>
            </div>

          </div>
          <div class="skills__right">
            <div class="skills__title-section">Основной стек</div>
            <SkillProgress/>
          </div>
        </div>
      <div class="skills__main-content-bottom">
        <div class="skills__title-section">Базовый стек</div>
        <Skills
          :skills="skills"/>
      </div>
      </section>
      <MobileMenu/>
  </main>
</template>


<style src="./style.scss" lang="scss"></style>