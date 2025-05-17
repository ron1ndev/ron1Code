<script setup>
import Index from './components/defoult/index.vue';

import { ref, computed } from 'vue';

let text = 'Кнопка'

const handleClick = (value)=>{
  console.log(value)
}

</script>

<template>
 <div>
  <Index/>
 </div>
</template>

<style scoped>

</style>
