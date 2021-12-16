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
        <div class="form-field d-flex fx-col">
          <label for="station">Station</label>
          <select
            required
            class="form-control select rounded-1 white"
            placeholder="station"
            v-model="station"
          >
            <option value="station" disabled hidden>station</option>
            <option
              :name="i"
              v-for="(station, i) in stations"
              :key="station.id"
            >
              {{ station.id }}
            </option>
          </select>
        </div>
      </div>
      <button
        style="margin-top: 10px; background-color: #ff364f"
        class="btn rounded-2 text-white"
        type="button"
        @click="addBike()"
      >
        New Bike
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
      lat: '',
      lng: '',
      stations: [],
    };
  },
  mounted() {
    this.getStation();
  },
  methods: {
    addBike() {
      const bike = {
        name: this.name,
        pictureUrl: this.pictureUrl,
        lat: this.lat,
        lng: this.lng,
        station: this.station,
        user_id: '0',
      };
      return axios.post('/api/bikes/new', bike);
    },
    getStation() {
      return Vue.axios.get('/api/station').then((res) => {
        if (res.status === 200) {
          this.stations = res.data;
        } else {
          console.error(res);
        }
      });
    },
  },
};
</script>
