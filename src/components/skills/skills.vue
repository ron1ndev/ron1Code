<script setup>

const images = import.meta.glob('@/assets/img/skills/*.{png,svg}', {
  eager: true,
  as: 'url'
})

const skills = [
  {file:'1.png',name:'CSS 3',alt:'CSS 3'},
  {file:'2.png',name:'HTML 5',alt:'HTML 5'},
  {file:'3.png',name:'JavaScript',alt:'JavaScript'},
  {file:'4.1.png',name:'React',alt:'React'},
  {file:'8.png',name:'Vue',alt:'Vue'},
  {file:'5.png',name:'Git',alt:'Git'},
  {file:'9.svg',name:'Vite',alt:'Vite'},
  {file:'6.png',name:'Gulp',alt:'Gulp'},
  // {path:'/src/assets/img/skills/7.png',name:'Webpack',alt:'Webpack'},
]

skills.forEach(skill => {
  skill.path = images[`/src/assets/img/skills/${skill.file}`]
})

</script>

<template>
  <div class="skills">
    <div class="skills__content">
        <!-- <div class="skills__title title">Skills</div> -->
         <div class="skills__slider">
          <div class="skills__track">
            <ul class="skills__list">
                <li class="skills__item" v-for="skill in skills">
                    <div class="skills__img"><img :src="skill.path" :alt="skill.alt"></div>
                    <div class="skills__name">{{ skill.name }}</div>
                </li>
            </ul>
             <ul class="skills__list">
                <li class="skills__item" v-for="skill in skills">
                    <div class="skills__img"><img :src="skill.path" :alt="skill.alt"></div>
                    <div class="skills__name">{{ skill.name }}</div>
                </li>
            </ul>
          </div>
        </div>
        <!-- <div class="skills__title title-overlay">Skills</div> -->
    </div>
  </div>

</template>

<style src="./style.scss"></style>