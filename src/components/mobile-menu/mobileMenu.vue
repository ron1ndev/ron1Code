<script setup>
import { useDesktopStore } from '@/store/desktop';
import { useRouter } from 'vue-router'

const store = useDesktopStore()
const router = useRouter()
const currentRouter = router.currentRoute.value.name

const openModal = ()=>{
  store.changeVisibleModal(true)
}

const toLink = (link)=>{
 router.push(link)
}

const menuLinks = [
        {
    icon: `<svg width="22" height="22" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0.5C16.4043 0.500079 16.7958 0.636048 17.0859 0.889648L31.1025 13.1396H31.1035C31.3895 13.389 31.5065 13.6888 31.5 13.9717C31.4934 14.2579 31.3587 14.5685 31.0635 14.8262C30.446 15.3641 29.5328 15.3883 28.96 14.8877L28.3623 14.3652L27.5332 13.6406V26.25C27.5332 26.88 26.9263 27.5 26.0303 27.5H18.5215V20.5H13.5166V27.5H6.00684C5.11077 27.5 4.50391 26.88 4.50391 26.25V13.6055L3.6748 14.3311L2.99121 14.9287C2.42905 15.42 1.56673 15.3802 0.935547 14.8271V14.8262L0.832031 14.7275C0.60883 14.4916 0.505609 14.2229 0.5 13.9727C0.493712 13.6898 0.610064 13.3891 0.895508 13.1387L0.896484 13.1396L14.9131 0.889648C15.2033 0.635974 15.5955 0.5 16 0.5Z" fill="currentColor" stroke="currentColor"/>
            </svg>`,
    title:'menu.home',
    slug:'Home',
    link:() => toLink('/')         
  },
      {
    icon: `              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11.9999L11.6422 16.8211C11.7734 16.8866 11.839 16.9194 11.9078 16.9324C11.9687 16.9438 12.0313 16.9438 12.0922 16.9324C12.161 16.9194 12.2266 16.8866 12.3578 16.8211L22 11.9999M2 16.9999L11.6422 21.8211C11.7734 21.8866 11.839 21.9194 11.9078 21.9324C11.9687 21.9438 12.0313 21.9438 12.0922 21.9324C12.161 21.9194 12.2266 21.8866 12.3578 21.8211L22 16.9999M2 6.99994L11.6422 2.17883C11.7734 2.11324 11.839 2.08044 11.9078 2.06753C11.9687 2.0561 12.0313 2.0561 12.0922 2.06753C12.161 2.08044 12.2266 2.11324 12.3578 2.17883L22 6.99994L12.3578 11.8211C12.2266 11.8866 12.161 11.9194 12.0922 11.9324C12.0313 11.9438 11.9687 11.9438 11.9078 11.9324C11.839 11.9194 11.7734 11.8866 11.6422 11.8211L2 6.99994Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
    title:'menu.projects',
    slug:'Projects',
    link:() => toLink('/Projects')         
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 21L8 7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V21M5.2 21L18.8 21C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7L5.2 7C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2L2 17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    title:'menu.skills',
    slug:'Skills',       
    link:() => toLink('/Skills')        
  },
    {
    icon: `                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 9H2M14 17.5L16.5 15L14 12.5M10 12.5L7.5 15L10 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title:'menu.experience',
    slug:'Experience',
    link:() => toLink('/Experience')         
  },
    {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12H5.88197C6.56717 12 7.19357 12.3871 7.5 13C7.80643 13.6129 8.43283 14 9.11803 14H14.882C15.5672 14 16.1936 13.6129 16.5 13C16.8064 12.3871 17.4328 12 18.118 12H22M2 12V8.8C2 7.11984 2 6.27976 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V12M2 12V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
    title:'menu.contacts',
    slug:'Contacts',
    link:openModal      
  },
]

</script>

<template>
  <nav class="header__menu-mobile menu-mobile">
    <ul class="menu-mobile__list">
        <li class="menu-mobile__item" :class="{'active':item.slug===currentRouter}" v-for="(item,index) in menuLinks" :key="index" @click="item.link?.()">
            <div class="menu-mobile__icon" v-html="item.icon">
              </div>
            <div class="menu-mobile__title">
              {{ $t(item.title) }}
            </div>
        </li>
    </ul>
  </nav>
</template>

<style src="./style.scss" lang="scss" scoped></style>




