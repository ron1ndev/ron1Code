<script setup lang="ts">
import skillProgressItem from '../skill-progress-item/skillProgressItem.vue';
defineOptions({
  name:"SkillProgress"
})

import icon1 from '@/assets/img/skills/js.png'
import icon2 from '@/assets/img/skills/html.png'
import icon3 from '@/assets/img/skills/css.png'
import icon4 from '@/assets/img/skills/vue.png'
import icon5 from '@/assets/img/skills/git.png'

type Bar = {
  icon: string,
  color: string,
  length: number,
}
const bars:Bar[] = [
  {
    icon: icon1,
    color: '#FFD600',
    length: 400,
  },
  {
    icon: icon2,
    color: '#FF8002',
    length: 439,
  },
  {
    icon: icon3,
    color: '#039BE5',
    length: 481,
  },
  {
    icon: icon4,
    color: '#23DA9A',
    length: 447,
  },
  {
    icon: icon5,
    color: '#E53D0A',
    length: 373,
  },
];
</script>

<template>

  <div class="SkillProgress">
    <skillProgressItem
    v-for="bar in bars"
    :key="bar.icon"
    :bar="bar"
    />
  </div>

</template>

<style src="./style.scss" lang="scss" scoped></style>