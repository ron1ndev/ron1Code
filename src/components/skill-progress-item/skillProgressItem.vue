<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
defineOptions({
  name:"SkillProgressItem"
})

const props = defineProps({
  bar:{
    type:Object,
    require:true
  }
})

const rest = (props.bar.length / 533) * 100

console.log(rest)



// let progressBar = ref(null)
// let idInterval = ref(null)

// onMounted(()=>{
//   idInterval.value = setTimeout(()=>{
//     const bar = progressBar.value
//     bar.style.maxWidth = props.bar.length
//   },3000)

// })

// onUnmounted(()=>{
//   clearTimeout(idInterval)
// })


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