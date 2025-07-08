import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Experience from '../views/experience/experience.vue'
import Skills from '@/views/skills/skills.vue'
import Projects from '@/views/projects/projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
  ],
})

export default router
