<script setup>
import Header from '@/components/header/header.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import ExperienceItem from '../experience/experience-item/experience-item.vue'

import { computed } from 'vue';
import { useI18n } from 'vue-i18n'

const { locale, messages } = useI18n()

const experiences = computed(() => messages.value[locale.value].experiences)

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