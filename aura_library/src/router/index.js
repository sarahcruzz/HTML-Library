import { createRouter, createWebHistory } from 'vue-router'


import CadastroView from '@/views/CadastroView.vue'
import HomeView from '@/views/HomeView.vue'
import ListaLivrosView from '@/views/ListaLivrosView.vue'
import LoginView from '@/views/LoginView.vue'
import LivroInfoView from '@/views/LivroInfoView.vue'
import ListaFavoritosView from '@/views/ListaFavoritosView.vue'
import VerEmprestimoView from '@/views/VerEmprestimoView.vue'
import GerenciarBibliotecaView from '@/views/GerenciarBibliotecaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lista-livros',
      name: 'listaLivros',
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
      name: 'livroUnico',
      component: LivroInfoView
    },
    {
      path: '/favoritos',
      name: 'listaFavoritados',
      component: ListaFavoritosView
    },
    {
      path: '/emprestimo',
      name: 'verEmprestimos',
      component: VerEmprestimoView
    },
    {
      path: '/status',
      name: 'statusEmprestimo',
      component: VerEmprestimoView
    },
    {
      path: '/gerenciarBiblioteca',
      name: 'gerenciar',
      component: GerenciarBibliotecaView
    },
    {
      path: '/verLivros',
      name: 'vertodoslivros',
      component: VerEmprestimoView
    },
  ],
})

export default router
