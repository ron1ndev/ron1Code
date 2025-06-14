<script setup>
import Header from '@/components/header/header.vue';
import SkillProgress from '@/components/skill-progress/skillProgress.vue';
const codeIcon = '</>'
</script>

<template>
  <Header/>
  <main>
      <section class="skills" id="skills">
        <div class="skills__main-content">
          <div class="skills__left">

            <div class="skills__card-last-project last-poject">
              <div class="last-poject__header">
                <div class="last-poject__name">O!task</div>
                <div class="last-poject__descr">Таск-трекер, CRM, база знаний и учет финансов в одной системе. Российская система управления компанией</div>
              </div>
              <div class="last-poject__content">
                <div class="last-poject__content-left">
                  <div class="last-poject__type">Web-App</div>
                  <ul class="last-poject__technology-list">
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/8.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/3.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/2.png" alt=""></li>
                    <li class="last-poject__technology-item"><img src="/src/assets/img/skills/1.png" alt=""></li>
                  </ul>
                  <div class="last-poject__btn">
                    <div class="last-poject__btn-icon">{{ codeIcon }}</div>
                    <div class="last-poject__btn-text">Посмотреть</div>
                  </div>
                </div>
                <div class="last-poject__content-right">
                  <div class="last-poject__preview">
                    <img src="/src/assets/img/projects/0.1.png" alt="last-project">
                  </div>
                </div>
              </div>
            </div>

          </div>
          <SkillProgress/>
        </div>
      </section>
  </main>
</template>


<style src="./style.scss" lang="scss" scoped></style>