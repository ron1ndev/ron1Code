<script setup>
import Header from '@/components/header/header.vue';
import Skills from '@/components/skills/skills.vue';
import NeonBtn from '@/components/ui/neon-btn/neon-btn.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

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

const vh  = ref(window.innerHeight * 0.01)

const setVH = () =>{
  vh.value = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh.value}px`)
}





const InitText = reactive({
  welcome:'Hello World',
  dev:'Frontend develop'
})

const printText  = reactive({
  welcome:'',
  dev:''
})

const idIntervals = {}

const counters = reactive({
  welcome:0,
  dev:0
})

const setText = (initKey,printKey,speed)=>{

  counters[initKey] = 0;
  printText[printKey] = ''

  idIntervals[printKey] = setInterval(()=>{

  counters[initKey] += 1
  printText[printKey] = InitText[initKey].slice(0,counters[initKey])

   if(counters[initKey] >= InitText[initKey].length){
   clearInterval(idIntervals[printKey])
   return
  } 

  },speed)

}

const openProjects = () =>{
  router.push('/projects')
}

onMounted(()=>{
  setText('welcome','welcome', 200)
  setText('dev','dev', 100)
  setVH()
  window.addEventListener('resize', setVH)
})

onUnmounted(()=>{

  for(let key in idIntervals){
    clearInterval(idIntervals[key])
  }
  window.removeEventListener('resize', setVH)
})

</script>

<template>
  <Header/>
  <main>
    <div class="main__content _container">
      <section class="hero" id="hero">
          <div class="hero__content">
              <div class="hero__title">
                  <div class="hero__title-dev">
                      <span class="hero__title-dev-fake" v-if="!printText.dev.length">Frontend develop</span><span v-else>{{ printText.dev }}</span>
                  </div>
                  <div class="hero__title-app">
                      <span class="hero__title-gradient"><span class="k1">Web Apps</span> & <span class="k2">Websites</span></span>
                  </div>                  
                   <div class="hero__subtitle">{{ $t('hero.description') }}</div>
              </div>
  
              <div class="hero__social" :data-label="$t('social.label')">
                  <div class="hero__git">
                      <a href="https://github.com/ron1ndev" target="_blank">
                          <svg class="logo__icon-svg" width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient id="hover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" style="stop-color: rgba(255,128,2,1); stop-opacity: 1;" />
                                  <stop offset="100%" style="stop-color: rgba(253,18,132,1); stop-opacity: 1;" />
                                </linearGradient>
                              </defs>
                              
                              <path
                                class="logo__icon-path"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M32.0265 0C14.3167 0 0 14.6666 0 32.8112C0 47.3151 9.17318 59.5924 21.8988 63.9377C23.4898 64.2644 24.0726 63.2317 24.0726 62.3631C24.0726 61.6024 24.0202 58.9951 24.0202 56.2784C15.1112 58.2344 13.256 52.3671 13.256 52.3671C11.8242 48.5645 9.70287 47.5871 9.70287 47.5871C6.78696 45.5771 9.91527 45.5771 9.91527 45.5771C13.1498 45.7945 14.847 48.9451 14.847 48.9451C17.7098 53.9424 22.323 52.5304 24.1788 51.6611C24.4437 49.5425 25.2926 48.0758 26.194 47.2611C19.0884 46.5005 11.6125 43.6758 11.6125 31.0725C11.6125 27.4872 12.8843 24.5539 14.8995 22.2726C14.5815 21.4579 13.4677 18.0893 15.2181 13.5806C15.2181 13.5806 17.9222 12.7113 24.0195 16.9486C26.63 16.2304 29.3222 15.865 32.0265 15.8619C34.7306 15.8619 37.4873 16.2426 40.0328 16.9486C46.1307 12.7113 48.8349 13.5806 48.8349 13.5806C50.5852 18.0893 49.4708 21.4579 49.1528 22.2726C51.2211 24.5539 52.4405 27.4872 52.4405 31.0725C52.4405 43.6758 44.9645 46.4458 37.8058 47.2611C38.9727 48.2931 39.9797 50.2485 39.9797 53.3451C39.9797 57.7451 39.9272 61.2764 39.9272 62.3624C39.9272 63.2317 40.5107 64.2644 42.101 63.9384C54.8267 59.5917 63.9999 47.3151 63.9999 32.8112C64.0523 14.6666 49.6832 0 32.0265 0Z"
                              />
                            </svg>
                  </a>
                  </div>
                  <div class="hero__tg">
                      <a href="https://t.me/R_0N11" target="_blank">
                          <svg class="logo__icon-svg tg" width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                  <linearGradient id="telegram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stop-color="#FF4500" /> 
                                      <stop offset="50%" stop-color="#FF6347" /> 
                                      <stop offset="100%" stop-color="#C70039" /> 
                                    </linearGradient>
                              </defs>
                              <path
                                class="logo__icon-path"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M32 0C14.3215 0 0 14.3236 0 32C0 49.6764 14.3236 64 32 64C49.6784 64 64 49.6764 64 32C64 14.3236 49.6764 0 32 0ZM47.7172 21.9231L42.465 46.6725C42.0769 48.4274 41.0323 48.8526 39.5747 48.0268L31.5747 42.1306L27.7161 45.8467C27.2908 46.272 26.9295 46.6333 26.1037 46.6333L26.6715 38.4908L41.4968 25.0963C42.143 24.5285 41.3543 24.2065 40.5017 24.7742L22.1791 36.3086L14.2823 33.8436C12.5667 33.3027 12.5275 32.128 14.6436 31.3022L45.4957 19.4044C46.9285 18.8883 48.1796 19.7533 47.7151 21.921L47.7172 21.9231Z"
                              />
                            </svg>
                  </a>
                  </div>
              </div>
          </div>
      </section>
    </div>

    <div class="hero__btns">
      <NeonBtn
      background="#03e9f4"
      @handleClick="openProjects"
      >
      {{ $t('hero.btn') }}
     </NeonBtn>

    </div>

    <Skills
    :skills="skills"/>

    <MobileMenu/>

    <div class="glow"></div>

    <div class="glow2"></div>

  </main>
</template>


<style src='./style.scss' lang="scss" scoped></style>
