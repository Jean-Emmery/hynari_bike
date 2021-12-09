<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import Vue from 'vue';
//import HelloWorld from '../components/HelloWorld.vue';
import { defineComponent } from '@vue/composition-api'


export default defineComponent({
  data() {
    return {
      1: 1,
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    console.log("user.user")
    console.log(user.user)
  }
})
</script>
