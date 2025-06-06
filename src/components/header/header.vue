<script setup>
import { computed, watch } from 'vue'
import { useDesktopStore } from '@/store/desktop';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const store = useDesktopStore()

const currentLocale = computed(()=>{
  return locale.value
})

const isDark = computed(()=>{
  return store.isDarkTheme 
})

const switchTheme  = () =>{
  store.changeTheme(!isDark.value)
}

const switchLocal = ()=>{
   locale.value = locale.value === 'ru' ? 'en' : 'ru';
}


watch(isDark,(val)=>{
  const root = document.documentElement

  if(!val){
    root.classList.add('theme-light')
    root.classList.remove('theme-dark')
  }else{
    root.classList.add('theme-dark')
    root.classList.remove('theme-light')
  }
})

</script>

<template>
  <header class="header" id="header">
    <div class="header__content _container">
        <div class="header__logo logo">
            <div class="logo__title"><a href="https://github.com/ron1ndev" target="_blank">GitHub</a></div>
            <div class="logo__icon">
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
        </div>
        <nav class="header__menu">
            <ul class="header__list">
                <!-- <li class="header__item"><a class="header__link" href="#">Главная</a></li> -->
                <li class="header__item"><a class="header__link" href="#projects">{{ $t('menu.projects') }}</a></li>
                <li class="header__item"><a class="header__link" href="#skills">{{ $t('menu.skills') }}</a></li>
                <li class="header__item"><a class="header__link" href="#experience">{{ $t('menu.experience') }}</a></li>
                <li class="header__item"><a class="header__link" href="#footer">{{ $t('menu.contacts') }}</a></li>
            </ul>
        </nav>
        <div class="header__options">
          <div class="header__locales-btn"
          :class="{active: currentLocale !== 'ru'}"
          @click="switchLocal">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="locales-btn-icon"><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path>
            </svg>
          </div>
          <div class="header__theme-switch theme-switch"
              :class="{switch:!isDark}" 
              @click="switchTheme">
              <div class="theme-switch__circle"></div>
          </div>
          <div class="header__social">
            <a class="header__social__link" href="https://github.com/ron1ndev" title="github" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="git-social-link-icon">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                </path>
              </svg>
            </a>
            <a class="header__social__link" href="https://t.me/R_0N11" title="github" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px" class="tg-social-link-icon"><path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"/></svg>
            </a>
          </div>
        </div>
    </div>
  </header>
</template>

<style src="./style.scss" lang="scss" scoped></style>




