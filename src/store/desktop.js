import {defineStore} from 'pinia'

export const useDesktopStore = defineStore('desktop',{

  state:()=>({
    isDarkTheme:true,
  }),
  getters:{
    themeMode(state){
       return state.isDarkTheme ? 'dark' : 'light'
    }
  },
  actions:{
    changeTheme(newVal){
      this.isDarkTheme = newVal
    }
  }

})