import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Matricula from '../views/MatriculaView.vue'
import ContatoView from '@/views/ContatoView.vue'
import FichaTreinoView from '@/views/FichaTreinoView.vue'

const routes = [
  { path: '/', component: Home},
  {path: '/FichaTreinoView', component: Ficha-Treino},
  {path: '/MatriculaView', component: Matricula},
  {path: '/ContatoView', component: Contato}
]
const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(){
    return{ top: 0 }
  }
})

export default router
