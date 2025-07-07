<script setup>
import { defineOptions, defineProps, onMounted, onUnmounted, nextTick, ref } from 'vue';
import { useDesktopStore } from '@/store/desktop';

defineOptions({
 name:"ExperienceItem"
})

const store = useDesktopStore()

const innerWidth = store.innerWidth

console.log(innerWidth)

const props = defineProps({
    experience:{
        type:Object,
        default:()=>({})
    },
    index:{
        type:Number,
    }
})

const exItem = ref(null)

const isReverse = props.index % 2 !== 0


const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(({ isIntersecting,target })=>{
        if(isIntersecting){


        target.querySelector('.item-experience__info').classList.add('active');
        target.querySelector('.item-experience__year').classList.add('active');
        target.querySelector('.item-experience__img').classList.add('active');
        target.querySelector('.test').classList.add('active2')  
            
        }
    })
},{
    threshold:innerWidth > 560 ? 0.8 : 0.3
})


onMounted( async () =>{
  await nextTick()
  observer.observe(exItem.value)
  
})

onUnmounted(()=>{
  observer.disconnect()
})


</script>

<template>
    <div class="experience__item item-experience" :class="[{'experience__item-reverse': isReverse,'isCurrent':experience.isCurrent},`experience__item-${index}`]" ref="exItem">
        <div class="item-experience__info info-experience" :class="{'info-experience-reverse': isReverse}">
            <div class="info-experience__subtitle">{{ experience.subtitle }}</div>
            <div class="info-experience__title">{{ experience.title }}</div>
            
            <ul class="info-experience__list">
                
                <li class="info-experience__item" v-for="item in experience.items" :key="item">{{ item }}</li>
            </ul>
            <div class="info-experience__year">{{ experience.year }} г.</div>
        </div>
        <div class="test">
            <div class="item-experience__img">
                <img src="/public/ex.png" alt="icon">
            </div>
    </div>
        <div class="item-experience__year" :class="{'item-experience__year-reverse': isReverse }">
            {{ experience.year }} г.
        </div>
    </div>                  
</template>


<style src="./style.scss" lang="scss" scoped></style>