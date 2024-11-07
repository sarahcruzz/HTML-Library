import { createRouter, createWebHistory } from 'vue-router'


import CadastroView from '@/views/CadastroView.vue'
import HomeView from '@/views/HomeView.vue'
import ListaLivrosView from '@/views/ListaLivrosView.vue'
import LoginView from '@/views/LoginView.vue'
import LivroInfoView from '@/views/LivroInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lista-livros',
      name: 'lista de livros',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ListaLivrosView
    
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/livro',
      name: 'livro único',
      component: LivroInfoView
    }
  ],
})

export default router
