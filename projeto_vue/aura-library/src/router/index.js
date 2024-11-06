import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
// import LoginPage from '../views/LoginPage.vue';
// import CadastroPage from '../views/CadastroPage.vue';
// import LivrosPage from '../views/LivrosPage.vue';

const routes = [
  { path: '/', component: App },
  // { path: '/login', component: LoginPage },
  // { path: '/cadastro', component: CadastroPage },
  // { path: '/livros', component: LivrosPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
