<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <input v-model="username" type="text" />
    <input v-model="password" type="text" />
    <button @click="login">caca</button>
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
    };
  },
  methods: {
    login() {
      return axios.post('http://localhost:8080/api/auth/login', {
        username: this.username,
        password: this.password,
      })
      .then(el => console.log(el))
      .catch(err => console.error(err))
    },
    }
  }
)
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
