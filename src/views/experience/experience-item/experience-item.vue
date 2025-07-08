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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 3.2H20.5C20.775 3.2 21 3.44 21 3.73333V6.4H11V3.73333C11 3.44 11.225 3.2 11.5 3.2ZM8 3.73333V6.4H4C1.79375 6.4 0 8.31333 0 10.6667V17.0667H12H20H32V10.6667C32 8.31333 30.2062 6.4 28 6.4H24V3.73333C24 1.67333 22.4312 0 20.5 0H11.5C9.56875 0 8 1.67333 8 3.73333ZM32 19.2H20V21.3333C20 22.5133 19.1063 23.4667 18 23.4667H14C12.8938 23.4667 12 22.5133 12 21.3333V19.2H0V27.7333C0 30.0867 1.79375 32 4 32H28C30.2062 32 32 30.0867 32 27.7333V19.2Z" fill="currentColor"/>
                </svg>
            </div>
    </div>
        <div class="item-experience__year" :class="{'item-experience__year-reverse': isReverse }">
            {{ experience.year }} г.
        </div>
    </div>                  
</template>


<style src="./style.scss" lang="scss" scoped></style>