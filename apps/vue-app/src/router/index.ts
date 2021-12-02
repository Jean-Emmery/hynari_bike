import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
// import Login from '../components/Login.vue';
// import Create from '../components/customer/Create.vue';
// import Edit from '../components/customer/Edit.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
