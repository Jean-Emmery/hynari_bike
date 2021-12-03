<template>
  <div class="grix shadow-1" style="height: 100vh">
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
        <div class="form-field d-flex fx-col">
          <label for="garage">Garage</label>
          <select
            required
            class="form-control select rounded-1 white"
            placeholder="Garage"
            v-model="garage"
          >
            <option value="garage" disabled hidden>Garage</option>
            <option :name="i" v-for="(garage, i) in garages" :key="garage.id">
              {{ garage.id }}
            </option>
          </select>
        </div>
        <div class="form-field">
          <label for="pictureUrl">Picture URL</label>
          <input
            required="required"
            type="text"
            id="pictureUrl"
            class="form-control rounded-1 white"
            placeholder="Picture URL"
            v-model="pictureUrl"
          />
        </div>
      </div>
      <button
        style="margin-top: 10px; background-color: #ff364f"
        class="btn rounded-2 txt-white"
        type="button"
        @click="addBike()"
      >
        Add
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
      pictureUrl: '',
      garages: [],
    };
  },
  mounted() {
    this.getGarage();
  },
  methods: {
    addBike() {
      const bike = {
        name: this.name,
        garage: this.garage.id,
        pictureUrl: this.pictureUrl,
      };
      console.log(bike);
      return axios.post('/api/bikes/new', bike).then(console.log('post'));
    },
    getGarage() {
      return Vue.axios.get('/api/garage/garageList').then((res) => {
        if (res.status === 200) {
          this.garages = res.data;
        } else {
          console.error(res);
        }
      });
    },
  },
};
</script>
<style></style>
