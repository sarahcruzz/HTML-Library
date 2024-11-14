import { createRouter, createWebHistory } from 'vue-router'


import CadastroView from '@/views/CadastroView.vue'
import HomeView from '@/views/HomeView.vue'
import ListaLivrosView from '@/views/ListaLivrosView.vue'
import LoginView from '@/views/LoginView.vue'
import LivroInfoView from '@/views/LivroInfoView.vue'
import ListaFavoritosView from '@/views/ListaFavoritosView.vue'
import VerEmprestimoView from '@/views/VerEmprestimoView.vue'

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
    },
    {
      path: '/favoritos',
      name: 'lista de favoritados',
      component: ListaFavoritosView
    },
    {
      path: '/emprestimo',
      name: 'ver os empréstimos',
      component: VerEmprestimoView
    }
  ],
})

export default router
