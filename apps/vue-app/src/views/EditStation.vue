<template>
  <div>
    <div class="grix shadow-1" style="height: 100vh">
      <form style="margin: 10%">
        <div class="grix xs1 sm2">
          <div class="form-field">
            <label for="capacityMax">Capacity</label>
            <input
              required="required"
              type="text"
              id="capacityMax"
              class="form-control rounded-1 white"
              placeholder="Capacity Max"
              v-model="station.capacityMax"
            />
          </div>
          <div class="form-field d-flex fx-col">
            <label for="garage">Garage</label>
            <select
              required
              class="form-control select rounded-1 white"
              placeholder="Garage"
              v-model="station.garage"
            >
              <option value="type" disabled hidden>Garage</option>
              <option :name="i" v-for="(garage, i) in garages" :key="garage.id">
                {{ garage.id }}
              </option>
            </select>
          </div>
        </div>
        <button
          style="margin-top: 10px; background-color: #ff364f"
          class="btn txt-white rounded-2"
          type="button"
          @click="editStation()"
        >
          Edit
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
      stationId: this.$route.params.id,
      station: [],
      garages: [],
    };
  },
  mounted() {
    this.getGarage();
    this.getStation(this.stationId);
  },
  methods: {
    getStation(id) {
      return axios.get(`/api/station/show/${id}`).then((res) => {
        this.station = res.data;
      });
    },
    editStation() {
      return axios
        .post('/api/station/editStation', this.station)
        .then((res) => {
          console.log(this.station);
          console.log(res);
          // router.push('/dashboard');
        });
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
