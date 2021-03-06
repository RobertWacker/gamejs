import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Подключаем VUE компоненты
const MainPage = () =>
  import ('../components/pages/main.vue');

const StorePage = () =>
  import('../components/pages/store.vue');

const SignUpPage = () =>
  import('../components/pages/account/SignUp.vue');

const SignInPage = () =>
  import('../components/pages/account/SignIn.vue');

const GamePage = () =>
  import('../components/pages/game.vue');

const AboutPage = () =>
  import('../components/pages/about.vue');

const NotFound = () =>
  import('../components/pages/404.vue');


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    component: MainPage,
  },{
    path: '/store',
    component: StorePage,
  },
  
  // Регистрация нового юзера
  {
    path: '/signup',
    component: SignUpPage,
  },
  
  // Авторизация нового юзера
  {
    path: '/signin',
    component: SignInPage,
  },

  {
    name: 'game',
    path: '/game/:id',
    component: GamePage,
  },
  { 
    path: '/about', 
    component: AboutPage, 
  },
  { 
    path: '/404', 
    name: '404', 
    component: NotFound, 
  },
  { 
    path: '*', 
    redirect: '/404' 
  }]
})