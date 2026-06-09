import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Matricula from '../views/MatriculaView.vue'
import ContatoView from '@/views/ContatoView.vue'
import FichaTreinoView from '@/views/FichaTreinoView.vue'
import HomeView from '../views/HomeView.vue'
import MatriculaView from '../views/MatriculaView.vue'

const routes = [
  { path: '/', component: HomeView},
  {path: '/Ficha', component: FichaTreinoView},
  {path: '/Matricula', component: MatriculaView},
  {path: '/Contato', component: ContatoView}
]
const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(){
    return{ top: 0 }
  }
})

export default router
