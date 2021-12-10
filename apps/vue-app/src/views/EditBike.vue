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
          type="button"
          @click="editBike(bikeId)"
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
    };
  },
  mounted() {
    this.getStation();
    this.getBike(this.bikeId);
  },
  methods: {
    getBike(id) {
      return axios.get(`/api/bikes/show/${id}`).then((res) => {
        this.bike = res.data;
      });
    },
    editBike(bikeId) {
      const bike = {
        id: bikeId,
        name: this.newName,
        pictureUrl: this.newPictureUrl,
        station: this.newStation,
      };
      console.log(this.capacityMax);
      console.log(bike);
      return axios.post('/api/bikes/editBike', bike).then(console.log('edit'));
    },
    getStation() {
      return Vue.axios.get('/api/station').then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          this.stations = res.data;
        } else {
          console.error(res);
        }
      });
    },
  },
};
</script>
<style></style>
