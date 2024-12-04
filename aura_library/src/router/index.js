import { createRouter, createWebHistory } from 'vue-router'


import CadastroView from '@/views/CadastroView.vue'
import HomeView from '@/views/HomeView.vue'
import ListaLivrosView from '@/views/ListaLivrosView.vue'
import LoginView from '@/views/LoginView.vue'
import LivroInfoView from '@/views/LivroInfoView.vue'
import GerenciarBibliotecaView from '@/views/GerenciarBibliotecaView.vue'
import GerenciarLivrosView from '@/views/GerenciarLivrosView.vue'
import CadastrarLivroView from '@/views/CadastrarLivroView.vue'
import StatusEmprestimoView from '@/views/StatusEmprestimoView.vue'

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
      name: 'pag todos os livros',
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
      path: '/livro/:id',
      name: 'livro-detalhe',
      component: LivroInfoView,
      props: true,  // Passa o parâmetro :id para o componente
    },
    {
      path: '/gerenciarBiblioteca',
      name: 'gerenciar usuarios na biblioteca',
      component: GerenciarBibliotecaView
    },
    {
      path: '/gerenciarLivros',
      name: 'gerenciar livros ',
      component: GerenciarLivrosView
    },
    {
      path: '/cadastrarLivro',
      name: 'cadastrar um novo livro ',
      component: CadastrarLivroView
    },
    {
      path: '/status',
      name: 'ver status emprestimo ',
      component: StatusEmprestimoView
    },

  
    
    
  ],
})

export default router
