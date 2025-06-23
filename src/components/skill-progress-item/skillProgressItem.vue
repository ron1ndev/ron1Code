<script setup lang="ts">
import { defineProps } from 'vue';
defineOptions({
  name:"SkillProgressItem"
})

type Bar = {
  icon: string,
  color: string,
  length: number,
}
type Props = {
  bar: Bar
}

const { bar } = defineProps<Props>()

const rest:number = (bar.length / 533) * 100

</script>

<template>

  <div class="SkillProgressItem progress-item"
  :style="{
    '--barColor':bar.color,
    '--barWidth':`${bar.length}px`,
    '--restWidth':`${rest}%`
  }">
    <div class="progress-item__icon"><img :src="bar.icon" alt="js"></div>
    <div class="progress-item__bar">
      <div ref="progressBar" class="progress-item__progress"></div>
    </div>
  </div>

</template>

<style src="./style.scss" lang="scss" scoped></style>