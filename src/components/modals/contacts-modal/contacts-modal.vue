<script setup>
import Drawer from '@/components/drawer/drawer.vue';
import TelegramIcon from '@/components/ui/neon-btn/icons/telegramIcon.vue';
import GitIcon from '@/components/ui/neon-btn/icons/gitIcon.vue';
import InstagramIcon from '@/components/ui/neon-btn/icons/instagramIcon.vue';
import { computed,ref,watch, nextTick, reactive , onMounted } from 'vue';
import axios from 'axios';
import { useDesktopStore } from '@/store/desktop';
const store = useDesktopStore()

const inputName = ref(null)
const inputEmail = ref(null)
const inputDescr = ref(null)

const mailText  = ref(null)

const data = reactive({
  name:'',
  descr:'',
  email:''
})

const touched = reactive({
  name:false,
  email:false,
  descr:false
})

const inputKeys = ['name','descr','email']
let inputElems = {}

const isVisibleModal = computed(()=>{
  return store.isVisibleModal
})

const closeModal = ()=>{
  store.changeVisibleModal(false)
}

const focus = () =>{
  inputName.value.focus()
}

const validateField = (key)=>{

   const el = inputElems[key]
   if (!el) return

    if( data[key].trim() === '' && touched[key] ){
      inputElems[key].classList.add('error')
    }else{
      inputElems[key].classList.remove('error')
    }
}

const validateForm  =  () => {
 
 inputKeys.forEach(key=>{

    if(!inputElems[key]) return

    if( data[key].trim() === '' ){
      inputElems[key].classList.add('error')
    }else{
      inputElems[key].classList.remove('error')
    }
 })
}

const setInputElements = () =>{
  inputElems = {
    name:inputName.value,
    email:inputEmail.value,
    descr:inputDescr.value,
  }
}

const handleBlur = (field) =>{
  touched[field] = true
  validateField(field)
}

const handleFocus = (event) =>{
  event.target.classList.remove('error')
}

const handleSendMail = async () => {

  validateForm()

  if(data.name === '' || data.email === '' || data.descr === '') return


  try{

    await axios.post('https://formspree.io/f/meokgavb',{data},)

    data.name = ''
    data.email = ''
    data.descr = ''

    store.showSuccses('Сообщение отправлено!')

  }catch(e){
   store.showErrors(e)
  }
  

}

const copyText = async () =>{
  
  const text = mailText.value.textContent

  try{
    await navigator.clipboard.writeText(text)
    store.showSuccses('Успешно скопировано!')

  }catch(e){
    store.showErrors(e)
    
  }
}

watch(isVisibleModal, async (newVal) => {

  if(newVal){
    await nextTick()
    setInputElements()
  }
})

onMounted(()=>{
 setInputElements()
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

        <form class="contacts-modal__form" action="https://formspree.io/f/meokgavb" method="post" autocomplete="off">

          <div class="contacts-modal__inputs">
            <input @focus="handleFocus" @blur="handleBlur('name')" v-model="data.name" ref="inputName" class="contacts-modal__input" type="text" name="name" placeholder="Имя">
            <input @focus="handleFocus" @blur="handleBlur('email')" v-model="data.email" ref="inputEmail" class="contacts-modal__input" type="email" name="email" placeholder="Email">
          </div>

          <textarea @focus="handleFocus" @blur="handleBlur('descr')" v-model="data.descr" ref="inputDescr" class="contacts-modal__textarea" name="descr" placeholder="Сообщение"></textarea>

          <button class="contacts-modal__btn" type="submit" @click.prevent="handleSendMail">Отправить</button>

        </form>

        <div class="contacts-modal__footer">
          <div class="contacts-modal__social">
            <a href="https://t.me/R_0N11" target="_blank" class="contacts-modal__social-icon">
              <TelegramIcon/>
            </a>
            <a href="https://github.com/ron1ndev" target="_blank" class="contacts-modal__social-icon">
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