<script setup>
import Header from '@/components/header/header.vue';
import SkillProgress from '@/components/skill-progress/skillProgress.vue';
import Skills from '@/components/skills/skills.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const skills = [
  {file:'nodejs.png',name:'nodejs',alt:'nodejs'},
  {file:'express.png',name:'express',alt:'express'},
  {file:'webpack.png',name:'webpack',alt:'webpack'},
  {file:'postsql.png',name:'postsql',alt:'postsql'},
  {file:'vite.png',name:'vite',alt:'vite'},
  {file:'gulp.png',name:'gulp',alt:'gulp'},
  {file:'tailwind.png',name:'tailwind',alt:'tailwind'},
  {file:'figma.png',name:'figma',alt:'figma'},
]

const codeIcon = '</>'
</script>

<template>
  <Header/>
  <main>
      <section class="skills" id="skills">
        <div class="skills__main-content">
          <div class="skills__left">
            <div class="skills__title-section">{{ t('projects.mainSPAproject') }}</div>

            <div class="skills__card-last-project last-poject">
              <div class="last-poject__header">
                <div class="last-poject__name">O!task</div>
                <div class="last-poject__descr">{{ t('projects.descrProjects.otask') }}</div>
              </div>
              <div class="last-poject__content">
                <div class="last-poject__content-left">
                  <div class="last-poject__type">{{ t('projects.typeProjects.app') }}</div>
                  <ul class="last-poject__technology-list">
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/vue.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/js.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/html.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/css.png" alt=""></li>
                  </ul>
                  <a href="https://otask.ru/" target="_blank" class="last-poject__btn">
                    <div class="last-poject__btn-icon">{{ codeIcon }}</div>
                    <div class="last-poject__btn-text">{{ t('technologies.btnViewProject') }}</div>
                  </a>
                </div>
                <a href="https://otask.ru/" target="_blank" class="last-poject__content-right">
                  <div class="last-poject__preview">
                    <img src="/src/assets/img/projects/otaskSmall.png" alt="last-project">
                  </div>
                </a>
              </div>
            </div>

          </div>
          <div class="skills__right">
            <div class="skills__title-section">{{ t('technologies.titleBlock.mainStack') }}</div>
            <SkillProgress/>
          </div>
        </div>
      <div class="skills__main-content-bottom">
        <div class="skills__title-section">{{ t('technologies.titleBlock.baseStack') }}</div>
        <Skills
          :skills="skills"/>
      </div>
      </section>
      <MobileMenu/>
  </main>
</template>


<style src="./style.scss" lang="scss"></style>