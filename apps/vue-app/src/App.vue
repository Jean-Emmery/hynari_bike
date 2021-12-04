<template>
  <div id="app">
    <div
      id="example-sidenav"
      data-ax="sidenav"
      class="sidenav shadow-1 sidenav-fixed white"
      :class="{ active: isSidenavActive }"
    >
      <div class="sidenav-header">
        <img
          class="sidenav-logo dropshadow-1"
          src="../src/assets/hynari_logo.png"
          alt="Logo"
        />
      </div>
      <router-link to="/" class="sidenav-link"
        ><i
          class="
            material-icons
            nav__icon
            d-block
            my-auto
            py-3
            shadow-3
            hoverable-3
            rounded-4
          "
          >home</i
        ></router-link
      >
      <router-link to="/garage" class="sidenav-link"
        ><i
          class="
            material-icons
            nav__icon
            d-block
            my-auto
            py-3
            shadow-3
            hoverable-3
            rounded-4
          "
          >directions_bike</i
        ></router-link
      >
      <router-link to="/dashboard" class="sidenav-link"
        ><i
          class="
            material-icons
            nav__icon
            d-block
            my-auto
            py-3
            shadow-3
            hoverable-3
            rounded-4
          "
          >grid_view</i
        ></router-link
      >
      <router-link to="/about" class="sidenav-link"
        ><i
          class="
            material-icons
            nav__icon
            d-block
            my-auto
            py-3
            shadow-3
            hoverable-3
            rounded-4
          "
          >help_outline</i
        ></router-link
      >

      <div class="mt-auto d-block">
        <router-link to="/login" class="sidenav-link"
          ><i
            class="
              material-icons
              nav__icon
              d-block
              my-auto
              py-3
              shadow-3
              hoverable-3
              rounded-4
              mt-auto
              d-block
            "
            >login</i
          ></router-link
        >
        <router-link to="/register" class="sidenav-link"
          ><i
            class="
              material-icons
              nav__icon
              d-block
              my-auto
              py-3
              shadow-3
              hoverable-3
              rounded-4
            "
            >how_to_reg</i
          ></router-link>
      <router-link to="/profil" class="sidenav-link"><i class="material-icons nav_icon d-block my-auto py-3 shadow-3 hoverable-3 rounded-4">account_circle</i></router-link>
      </div>
      <div class="sidenav-footer shadow-5 hoverable-5">
        <a href="https://hynari.fr">HYNARI</a>
      </div>
    </div>
    <button
      class="btn nav-button ml-auto d-block btn-circle transparent"
      @click="isSidenavActive = !isSidenavActive"
    >
      <i class="material-icons nav__icon d-block my-auto py-3">menu</i>
    </button>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      username: 'username',
      password: 'password',
      isSidenavActive: false,
    };
  },
  methods: {
    login() {
      return axios.post('http://localhost:3333/api/auth/login', {
        username: this.username,
        password: this.password,
      })
      .then(el => console.log(el))
      .catch(err => console.error(err))
    },
  }
});
</script>


<style lang="scss">
:root {
  #app {
    padding: 3%;
  }
  --ax-sidenav-width: 8rem;
}
@media screen and (min-width: 992px) {
  .nav-button {
    display: none !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .nav-button {
    display: none !important;
  }
}

.sidenav-footer {
  margin-top: 0 !important;
}
.sidenav-link {
  margin-bottom: 15%;
}
.sidenav-link:hover {
  background-color: initial !important;
}
.sidenav-footer {
  background-color: white;
}
.sidenav {
  padding: 0 !important;
}
.sidenav-link .material-icons {
  color: white;
}
.sidenav {
  --ax-sidenav-logo-height: 8rem;
  background-color: #ff364f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidenav {
  padding: 30px;

  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: gold !important;
    }
  }
}
</style>
