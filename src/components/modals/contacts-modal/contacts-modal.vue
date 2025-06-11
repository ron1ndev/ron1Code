<script setup>
import Drawer from '@/components/drawer/drawer.vue';
import TelegramIcon from '@/components/ui/neon-btn/icons/telegramIcon.vue';
import GitIcon from '@/components/ui/neon-btn/icons/gitIcon.vue';
import InstagramIcon from '@/components/ui/neon-btn/icons/instagramIcon.vue';
import { computed,ref,watch, nextTick } from 'vue';
import { useDesktopStore } from '@/store/desktop';
const store = useDesktopStore()

const isVisibleModal = computed(()=>{
  return store.isVisibleModal
})

const inputName = ref(null)

const focus = () =>{
  inputName.value.focus()
}

const closeModal = ()=>{
  store.changeVisibleModal(false)
}

const mailText  = ref(null)

const copyText = () =>{
  
  const text = mailText.value.textContent

  navigator.clipboard.writeText(text)
  
}


watch(isVisibleModal, async (newVal) => {

  if(newVal){
    await nextTick()
    // focus()
  }
})

</script>

<template>

  <Drawer @close="closeModal" 
    :isVisible="isVisibleModal"
    :drawerClass="'contacts-modal'">

    <div class="contacts-modal__wrap">

        <div class="contacts-modal__info">
          <h1 class="contacts-modal__title">Контакты</h1>
          <p class="contacts-modal__descr">Отправить сообщение на потчу</p>
        </div>

        <form class="contacts-modal__form" action="#" autocomplete="off">

          <div class="contacts-modal__inputs">
            <input ref="inputName" class="contacts-modal__input" type="text" name="name" placeholder="Имя">
            <input class="contacts-modal__input" type="text" name="Email" placeholder="Email">
          </div>

          <textarea class="contacts-modal__textarea" name="descr" placeholder="Сообщение"></textarea>

          <button class="contacts-modal__btn" type="submit">Отправить</button>

        </form>

        <div class="contacts-modal__footer">
          <div class="contacts-modal__social">
            <a href="#" target="_blank" class="contacts-modal__social-icon">
              <TelegramIcon/>
            </a>
            <a href="#" target="_blank" class="contacts-modal__social-icon">
              <GitIcon/>
            </a>
            <a href="#" target="_blank" class="contacts-modal__social-icon">
              <InstagramIcon/>
            </a>
          </div>
          <div class="contacts-modal__footer-descr">
            <div class="contacts-modal__footer-decor"></div>
            <div class="contacts-modal__footer-text">Социальные сети</div>
            <div class="contacts-modal__footer-decor"></div>
          </div>
          <div class="contacts-modal__mail-content">
            <div class="contacts-modal__mail-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5893 15.3033L9.41079 16.4818C7.78361 18.109 5.14542 18.109 3.51824 16.4818C1.89105 14.8546 1.89105 12.2164 3.51824 10.5892L4.69675 9.41074M15.3033 10.5892L16.4819 9.41074C18.109 7.78355 18.109 5.14536 16.4819 3.51818C14.8547 1.89099 12.2165 1.89099 10.5893 3.51818L9.41079 4.69669M7.08338 12.9166L12.9167 7.08331" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <el-tooltip
                class="box-item"
                effect="dark"
                content="Копировать ссылку"
                placement="top-start"

            >
              <div ref="mailText" class="contacts-modal__mail" @click="copyText">roma-gromov-1990@mail.ru</div>
            </el-tooltip>

          </div>
        </div>

    </div>

  </Drawer>

</template>

<style src="./style.scss" lang="scss"></style>