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
              v-model="name"
            />
          </div>
          <div class="form-field">
            <label for="newLat">Latitude</label>
            <input
              required="required"
              type="text"
              id="newLat"
              class="form-control rounded-1 white"
              placeholder="Latitude"
              v-model="latitude"
            />
          </div>
          <div class="form-field">
            <label for="newLng">Longitude</label>
            <input
              required="required"
              type="text"
              id="newLng"
              class="form-control rounded-1 white"
              placeholder="Longitude"
              v-model="longitude"
            />
          </div>
        </div>
        <button
          style="margin-top: 10px; background-color: #ff364f"
          class="btn txt-white rounded-2"
          type="submit"
        >
          Edit Garage
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
      garageId: this.$route.params.id,
      garages: [],
      name: '',
      latitude: '',
      longitude: '',
    };
  },
  mounted() {
    this.getGarage(this.garageId);
  },
  methods: {
    getGarage(id) {
      return axios.get(`/api/garage/show/${id}`).then((res) => {
        this.garage = res.data[0]
        this.name = res.data[0].name
        this.latitude = res.data[0].lat
        this.longitude = res.data[0].lng
        this.id = res.data[0].id
      });
    },
      onSubmit () {
      this.errors = [];

      if (this.name) {
      } else {
        this.editGarage(this.id)
        .catch((res) => {
          console.error(res)
        })
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }
    },
    editGarage(garageId) {
      const garage = {
        id: garageId,
        name: this.name,
        lat: this.latitude,
        lng: this.longitude,
      };
      return axios
        .post('/api/garage/editGarage', garage);
    },
  },
};
</script>
<style></style>
