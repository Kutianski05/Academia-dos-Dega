import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Matricula from '../views/MatriculaView.vue'

const routes = [
  { path: '/', component: Home},
  
  {path: '/MatriculaView', component: Matricula}
]
const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(){
    return{ top: 0 }
  }
})

export default router
