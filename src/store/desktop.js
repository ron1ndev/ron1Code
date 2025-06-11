import {defineStore} from 'pinia'
import Swal from 'sweetalert2'

export const useDesktopStore = defineStore('desktop',{

  state:()=>({
    isDarkTheme:true,
    isVisibleModal:false,
    isLockBody:false,
    innerHeight:window.innerHeight,
    innerWidth:window.innerWidth,
  }),
  getters:{
    themeMode(state){
       return state.isDarkTheme ? 'dark' : 'light'
    }
  },
  actions:{
    changeTheme(newVal){
      this.isDarkTheme = newVal
    },
    changeVisibleModal(newVal){
      this.isVisibleModal = newVal
      this.isLockBody = newVal
    },
    showSuccses(){
      Swal.fire({
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        background: "#03e9f4",
        backdrop: false,
        html: `
        <div class="succses_container" style="display: flex; align-items: center; gap: 6px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0f0f0f">
            <path d="M9 16.2l-4.2-4.2L3 13.8l6 6 12-12-1.8-1.8z"/>
          </svg>
          <span>Успешно скопировано!</span>
        </div>
      `,               
        customClass: {
          popup: 'popup-succses',            
          title: 'title-succses',            
          icon: 'icon-succses'   
        } 
      });
    },
    showErrors(e){
      Swal.fire({
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        background: "#F4364C",
        backdrop: false,
        html: `
        <div class="error_container" style="display: flex; align-items: center; gap: 6px;">
          <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z" fill="#fff"/></svg>
          <span>Error!</span>
        </div>
      `,               
        customClass: {
          popup: 'popup-error',            
          title: 'title-error',            
          icon: 'icon-error'   
        } 
      });
    },
  }

})