<script setup>
import { defineOptions } from 'vue';
defineOptions({
  name:'sidebarView'
})



</script>

<template>
    <div class="projects__sidebar-view sidebar-view">
      <div class="sidebar-view__name-project">O!task</div>
      <div class="sidebar-view__type-project">Web-App</div>
      <div class="sidebar-view__descr-project">Таск-трекер, CRM, база знаний и учет финансов в одной системе. Российская система управления компанией</div>
      <ul class="sidebar-view__technology-list">
          <li class="sidebar-view__technology-item"><img src="/src/assets/img/skills/8.png" alt=""></li>
          <li class="sidebar-view__technology-item"><img src="/src/assets/img/skills/3.png" alt=""></li>
          <li class="sidebar-view__technology-item"><img src="/src/assets/img/skills/2.png" alt=""></li>
          <li class="sidebar-view__technology-item"><img src="/src/assets/img/skills/1.png" alt=""></li>
      </ul>
    </div>
</template>


<style src="./style.scss" lang="scss"></style>