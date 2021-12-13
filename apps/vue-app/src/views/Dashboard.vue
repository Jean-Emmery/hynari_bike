<template>
  <div>
    <h1>GARAGE :</h1>
    <button class="btn blue" @click="showGarages">Show List</button>
    <button class="btn blue" @click="addGarage">Add Garage</button>

    <h1>BIKES :</h1>
    <button class="btn blue" @click="showBikes">Show List</button>
    <button class="btn blue" @click="addBike">Add Bike</button>

    <h1>STATIONS :</h1>
    <button class="btn blue" @click="showStation">Show List</button>
    <button class="btn blue" @click="addStation">Add Station</button>

    <h1>USERS :</h1>
    <button class="btn blue" @click="showUser">Show List</button>
    <button class="btn blue" @click="addUser">Add User</button>
  </div>
</template>
<script>
import Vue from 'vue';
import router from '../router';

export default {
  methods: {
    showGarages() {
      this.$router.push({ path: '/gestionGarages' });
    },
    addGarage() {
      this.$router.push({ path: '/addGarage' });
    },
    showBikes() {
      this.$router.push({ path: '/gestionBikes' });
    },
    addBike() {
      this.$router.push({ path: '/addBike' });
    },
    showStation() {
      this.$router.push({ path: '/gestionStation' });
    },
    addStation() {
      this.$router.push({ path: '/addStation' });
    },
    showUser() {
      this.$router.push({ path: '/gestionUser' });
    },
    addUser() {
      this.$router.push({ path: '/addUser' });
    },
  },
};
</script>
