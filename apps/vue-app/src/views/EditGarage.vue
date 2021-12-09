<template>
  <div>
    <div class="grix" style="height: 100vh">
      <form style="margin: 10%">
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
            <label for="newLat">Latitude</label>
            <input
              required="required"
              type="text"
              id="newLat"
              class="form-control rounded-1 white"
              placeholder="Latitude"
              v-model="newLat"
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
              v-model="newLng"
            />
          </div>
        </div>
        <button
          style="margin-top: 10px; background-color: #ff364f"
          class="btn txt-white rounded-2"
          type="button"
          @click="editGarage(garageId)"
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
      newName: '',
      newLat: '',
      newLng: '',
    };
  },
  mounted() {
    this.getGarage(this.garageId);
  },
  methods: {
    getGarage(id) {
      return axios.get(`/api/garage/show/${id}`).then((res) => {
        this.garage = res.data;
      });
    },
    editGarage(garageId) {
      console.log('garageid' + garageId);
      const garage = {
        id: garageId,
        name: this.newName,
        lat: this.newLat,
        lng: this.newLng,
      };
      console.log(this.name);
      console.log(garage);
      return axios
        .post('/api/garage/editGarage', garage)
        .then(console.log('edit garage'));
    },
  },
};
</script>
<style></style>
