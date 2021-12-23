<template>
  <div>
    <div class="grix" style="height: 100vh">
      <form style="margin: 10%" v-on:submit.prevent="onSubmit">
        <div class="grix xs1 sm2">
          <div class="form-field">
            <label for="newName">Name</label>
            <input
              required="required"
              type="text"
              id="newName"
              class="form-control rounded-1 white"
              placeholder="Name"
              v-model="newName"
            />
          </div>
          <div class="form-field">
            <label for="newPictureUrl">Picture URL</label>
            <input
              required="required"
              type="text"
              id="newPictureUrl"
              class="form-control rounded-1 white"
              placeholder="Picture URL"
              v-model="newPictureUrl"
            />
          </div>
          <div class="form-field">
            <label for="newPictureUrl">Latitude</label>
            <input
              required="required"
              type="text"
              id="newPictureUrl"
              class="form-control rounded-1 white"
              placeholder="Picture URL"
              v-model="newLat"
            />
          </div>
          <div class="form-field">
            <label for="newPictureUrl">Longitude</label>
            <input
              required="required"
              type="text"
              id="newPictureUrl"
              class="form-control rounded-1 white"
              placeholder="Picture URL"
              v-model="newLng"
            />
          </div>
          <div class="form-field">
            <label for="newPictureUrl">User Id</label>
            <input
              required="required"
              type="text"
              id="newPictureUrl"
              class="form-control rounded-1 white"
              placeholder="Picture URL"
              v-model="userId"
            />
          </div>
          <div class="form-field d-flex fx-col">
            <label for="newStation">Station</label>
            <select
              required
              class="form-control select rounded-1 white"
              placeholder="Station"
              v-model="newStation"
            >
              <option value="type" disabled hidden>station</option>
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
          class="btn txt-white rounded-2"
          type="submit"
        >
          Edit Bike
        </button>
      </form>
    </div>
  </div>
</template>

<style>
label {
  color: white;
}

.form-control {
  height: 60px !important;
  color: #222;
  font-size: 18px;
}
</style>

<script>
import Vue from 'vue';
import axios from 'axios';
import router from '../router';

export default {
  data() {
    return {
      bikeId: this.$route.params.id,
      bike: [],
      stations: [],
      newName: '',
      newPictureUrl: '',
      newStation: '',
      newLat: '',
      newLng: '',
      userId: '',
    };
  },
  mounted() {
    this.getStation();
    this.getBike(this.bikeId);
  },
  methods: {
      onSubmit () {
      this.errors = [];

      if (this.newName) {
        this.errors.push('Name required.');
        } else {
          this.editBike(this.bikeId)
          .catch((res) => {
            console.error(res)
          })
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }
    },
    getBike(id) {
      return axios.get(`/api/bikes/show/${id}`).then((res) => {
        this.bike = res.data[0];
        this.newName = res.data[0].name
        this.newPictureUrl = res.data[0].pictureUrl
        this.newStation = res.data[0].station
        this.newLat = res.data[0].lat
        this.newLng = res.data[0].lng
        this.userId = res.data[0].user_id
      });
    },
    editBike(bikeId) {
      const bike = {
        id: bikeId,
        name: this.newName,
        pictureUrl: this.newPictureUrl,
        station: this.newStation,
      };
      return axios.post('/api/bikes/editBike', bike);
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
<style>
label {
  visibility: visible;
  display:  block;
  color: black;
}
</style>
