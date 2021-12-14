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
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
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
    path: '/gestionGarages',
    name: 'GestionGarages',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/GestionGarages.vue'),
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
    path: '/profil',
    name: 'Profil',
    component: () =>
      import('../views/Profil.vue'),
  },
  {
    path: '/addBike',
    name: 'AddBike',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddBike.vue'),
  },
  {
    path: '/garage/:id',
    name: 'EditGarage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditGarage.vue'),
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
    path: '/addBike',
    name: 'AddBike',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddBike.vue'),
  },
  {
    path: '/garage/show/:id',
    name: 'EditGarage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditGarage.vue'),
  },
  {
    path: '/bikes/show/:id',
    name: 'EditBike',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditBike.vue'),
  },
  {
    path: '/gestionBikes',
    name: 'GestionBikes',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/GestionBikes.vue'),
  },
  {
    path: '/station/:id',
    name: 'Station',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Station.vue'),
  },
  {
    path: '/gestionStation',
    name: 'GestionStation',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/GestionStation.vue'),
  },
  {
    path: '/station/show/:id',
    name: 'EditStation',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditStation.vue'),
  },
  {
    path: '/addStation',
    name: 'AddStation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddStation.vue'),
  },
  {
    path: '/gestionUser',
    name: 'GestionUser',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/GestionUser.vue'),
  },
  {
    path: '/user/show/:id',
    name: 'EditUser',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditUser.vue'),
  },
  {
    path: '/addUser',
    name: 'AddUser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ '../views/AddUser.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('user') || '{}')

  if (from.name !== 'Login' && from.name !== 'Register' && to.name !== 'Login' && to.name !== 'Register' && user.access_token == null) {
    router.push({ name: 'Login'})
    //next()
  } else if ((from.name == 'Login' || from.name == 'Register') && user.access_token == null) {
    if (to.name === 'Register' || to.name === 'Login') {
      next()
    }
    next(false)
  } else if (user && user.user) {
    if (user.user.role === '1') {
      if (to.name === 'Dashboard') {
        next(false)
      } else {
        next()
      }
    }
    if (user.user.role === '2') {
      if (to.name === 'Register' || to.name === 'Garage' || to.name === 'Login') {
        next(false)
      } else {
        next()
      }
    } else if (user.user.role === '3') {
      if (to.name === 'Register' || to.name === 'Login') {
        next(false)
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router;
