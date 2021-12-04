<template>
  <div>
    <h1>GARAGE :</h1>
    <button class="btn blue" @click="showGarages">Show List</button>
    <button class="btn blue" @click="addGarage">Add Garage</button>

    <h1>BIKES :</h1>
    <button class="btn blue" @click="showBikes">Show List</button>
    <button class="btn blue" @click="addBike">Add Bike</button>
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
  },
};
</script>
