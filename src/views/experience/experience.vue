<script setup>
import Header from '@/components/header/header.vue';
import MobileMenu from '@/components/mobile-menu/mobileMenu.vue';
import { onMounted, nextTick } from 'vue';








onMounted( async () =>{
  await nextTick()

  const experienceItem = document.querySelectorAll('.experience__item');


  console.log(experienceItem)



    const observer2 = new IntersectionObserver((entries,observer)=>{
    entries.forEach(({ isIntersecting,target })=>{
      if(isIntersecting){

        experienceItem.forEach(item=>{
          if(item===target){
            item.querySelector('.item-experience__info').classList.add('active');
            item.querySelector('.item-experience__year').classList.add('active');
            item.querySelector('.test').classList.add('active2')  
          }
        })
      }
    })
  },{
    threshold:1
  })


  experienceItem.forEach(item=>{
    observer2.observe(item)
  })
})



</script>

<template>
  <Header/>
  <main>
      <section class="experience" id="experience">
          <div class="experience__content _container">
              <div class="experience__chapter chapter-experience">
                  <div class="experience__item item-experience">
                      <div class="item-experience__info info-experience">
                          <div class="info-experience__subtitle">Фриланс</div>
                          <div class="info-experience__title">Верстальщик</div>
                          
                          <ul class="info-experience__list">
                              <li class="info-experience__item">Вёрстка и редизайн отдельных страниц для сайта университета.</li>
                              <li class="info-experience__item">Верстка адаптивных лендингов под заказ</li>
                          </ul>
                          <div class="info-experience__year">2020 г.</div>
                      </div>
                      <div class="test">
                          <div class="item-experience__img">
                              <img src="/public/ex.png" alt="icon">
                          </div>
                  </div>
                      <div class="item-experience__year">
                          2020 г.
                      </div>
                  </div>
                  <div class="experience__item experience__item-reverse  item-experience">
                      <div class="item-experience__info info-experience info-experience-reverse">
                          <div class="info-experience__subtitle">Компания Sima-land </div>
                          <div class="info-experience__title">Верстальщик</div>
                          
                          <ul class="info-experience__list">
                              <li class="info-experience__item">Разработка и поддержка адаптивных писем и лендингов с использованием HTML/CSS/JS.</li>
                              <li class="info-experience__item">Верстка и доработка лендингов на основе макетов, включая адаптацию под мобильные устройства.</li>
                              <li class="info-experience__item">Настройка и интеграция автоматических писем с платформами рассылок.</li>
                              <li class="info-experience__item">Тестирование кросс-браузерной и кросс-клиентской совместимости.</li>
                          </ul>
                          <div class="info-experience__year">2021 г.</div>
                      </div>
                      <div class="test test2">
                          <div class="item-experience__img">
                              <img src="/public/ex.png" alt="icon">
                          </div>
                  </div>
                      <div class="item-experience__year item-experience__year-reverse">
                          2021 г.
                      </div>
                  </div>
                  <div class="experience__item  item-experience">
                      <div class="item-experience__info info-experience">
                          <div class="info-experience__subtitle">Компания Sima-land </div>
                          <div class="info-experience__title">Технический специалист
                              CRM маркетинга</div>
                              
                          <ul class="info-experience__list">
                              <li class="info-experience__item">Составление ТЗ для разработчиков 1С и интеграция систем.</li>
                              <li class="info-experience__item">Ведение проектов по интеграции email, push и SMS-рассылок.</li>
                              <li class="info-experience__item">Сегментация клиентской базы для персонализированных рассылок.</li>
                              <li class="info-experience__item">Разработка и поддержка автоматических писем и уведомлений.</li>
                              <li class="info-experience__item">Настройка сценариев рассылок и динамического контента через платформу Mindbox</li>
                              <li class="info-experience__item">Интеграция с API для автоматизации рассылок и данных.</li>
                                  <li class="info-experience__item">Взаимодействие с разработчиками и менеджерами проектов.</li>
                          </ul>
                          <div class="info-experience__year">2022-2024 г.</div>
                      </div>
                      <div class="test">
                      <div class="item-experience__img">
                          <img src="/public/ex.png" alt="icon">
                      </div>
                  </div>
                      <div class="item-experience__year">
                          2022-2024 г.
                      </div>
                  </div>
                    
              </div>
          </div>
      </section>
      <MobileMenu/>
  </main>
</template>


<style src="./style.scss" lang="scss"></style>