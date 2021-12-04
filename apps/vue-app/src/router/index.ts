import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
// import Login from '../components/Login.vue';
// import Create from '../components/customer/Create.vue';
// import Edit from '../components/customer/Edit.vue';
import Bike from '../views/Bike.vue'

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
  {
    path: '/garage',
    name: 'Garage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Garage.vue'),
  },
  {
    path: '/bikes/:id',
    name: 'Bikes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Bikes.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () =>
      import('../views/Profil.vue'),
  },
  {
    path: '/addBike',
    name: 'AddBike',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddBike.vue'),
  },
  {
    path: '/addGarage',
    name: 'AddGarage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddGarage.vue'),
  },
  {
    path: '/bikes/show/:id',
    name: 'EditBike',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditBike.vue'),
  },
  {
    path: '/garage/:id',
    name: 'EditGarage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditGarage.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
  },
  {
    path: '/gestionGarages',
    name: 'GestionGarages',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/GestionGarages.vue'),
  },
  {
    path: '/gestionBikes',
    name: 'GestionBikes',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/GestionBikes.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
