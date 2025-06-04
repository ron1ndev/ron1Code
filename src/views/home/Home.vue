<script setup>
import Header from '@/components/header/header.vue';
import Skills from '@/components/skills/skills.vue';
import NeonBtn from '@/components/ui/neon-btn/neon-btn.vue';
import { onMounted, onUnmounted, reactive } from 'vue';

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

onMounted(()=>{
  setText('welcome','welcome', 200)
  setText('dev','dev', 100)
})

onUnmounted(()=>{

  for(let key in idIntervals){
    clearInterval(idIntervals[key])
  }
  
})


const menuLinks = [
      {
    icon: `              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11.9999L11.6422 16.8211C11.7734 16.8866 11.839 16.9194 11.9078 16.9324C11.9687 16.9438 12.0313 16.9438 12.0922 16.9324C12.161 16.9194 12.2266 16.8866 12.3578 16.8211L22 11.9999M2 16.9999L11.6422 21.8211C11.7734 21.8866 11.839 21.9194 11.9078 21.9324C11.9687 21.9438 12.0313 21.9438 12.0922 21.9324C12.161 21.9194 12.2266 21.8866 12.3578 21.8211L22 16.9999M2 6.99994L11.6422 2.17883C11.7734 2.11324 11.839 2.08044 11.9078 2.06753C11.9687 2.0561 12.0313 2.0561 12.0922 2.06753C12.161 2.08044 12.2266 2.11324 12.3578 2.17883L22 6.99994L12.3578 11.8211C12.2266 11.8866 12.161 11.9194 12.0922 11.9324C12.0313 11.9438 11.9687 11.9438 11.9078 11.9324C11.839 11.9194 11.7734 11.8866 11.6422 11.8211L2 6.99994Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
    title:'Проекты'        
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 21L8 7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V21M5.2 21L18.8 21C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7L5.2 7C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2L2 17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    title:'Опыт'        
  },
    {
    icon: `                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 9H2M14 17.5L16.5 15L14 12.5M10 12.5L7.5 15L10 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title:'Технологии'        
  },
    {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12H5.88197C6.56717 12 7.19357 12.3871 7.5 13C7.80643 13.6129 8.43283 14 9.11803 14H14.882C15.5672 14 16.1936 13.6129 16.5 13C16.8064 12.3871 17.4328 12 18.118 12H22M2 12V8.8C2 7.11984 2 6.27976 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V12M2 12V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
    title:'Контакты'        
  },
]

</script>

<template>
  <Header/>
  <main>
    <div class="main__content _container">
      <section class="hero" id="hero">
          <div class="hero__content">
              <div class="hero__title">
                  <div class="hero__title-dev">
                      {{ printText.dev }}
                  </div>
                  <div class="hero__title-app">
                      <span class="hero__title-gradient"><span class="k1">Web Apps</span> & <span class="k2">Websites</span></span>
                  </div>                  
                   <div class="hero__subtitle">UI для сайтов и приложений</div>
              </div>
  
              <div class="hero__social">
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
      >
      Смотреть проекты
     </NeonBtn>

    </div>

    <Skills/>

    <nav class="header__menu-mobile menu-mobile">
      <ul class="menu-mobile__list">
          <li class="menu-mobile__item" v-for="(item,index) in menuLinks" :key="index">
              <div class="menu-mobile__icon" v-html="item.icon">
               </div>
              <div class="menu-mobile__title">{{ item.title }}</div>
          </li>
      </ul>
  </nav>

  </main>
</template>


<style src='./style.scss' lang="scss" scoped></style>
