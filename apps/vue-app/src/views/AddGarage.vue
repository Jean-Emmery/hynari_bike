<template>
  <div class="grix" style="height: 100vh">
    <form style="margin: 10%">
      <div class="grix xs1 sm2">
        <div class="form-field">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            id="name"
            class="form-control rounded-1 white"
            placeholder="Name"
            v-model="name"
          />
        </div>
        <div class="form-field">
          <label for="lat">Latitude</label>
          <input
            required="required"
            type="text"
            id="lat"
            class="form-control rounded-1 white"
            placeholder="Latitude"
            v-model="lat"
          />
        </div>
        <div class="form-field">
          <label for="lng">Longitude</label>
          <input
            required="required"
            type="text"
            id="lng"
            class="form-control rounded-1 white"
            placeholder="Longitude"
            v-model="lng"
          />
        </div>
      </div>
      <button
        style="margin-top: 10px; background-color: #ff364f"
        class="btn rounded-2 text-white"
        type="button"
        @click="addGarage()"
      >
        New Garage
      </button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import router from '../router';

export default {
  data() {
    return {
      name: '',
      lat: '',
      lng: '',
    };
  },
  methods: {
    addGarage() {
      const garage = {
        name: this.name,
        lat: this.lat,
        lng: this.lng,
      };
      return axios
        .post('/api/garage/new', garage)
    },
  },
};
</script>
<style></style>
