<template>
  <div>
    <div class="grix" style="height: 100vh">
      <form style="margin: 10%">
        <div class="grix xs1 sm2">
          <div class="form-field">
            <label for="newCapacityMax">Capacity</label>
            <input
              required="required"
              type="text"
              id="newCapacityMax"
              class="form-control rounded-1 white"
              placeholder="Capacity Max"
              v-model="newCapacityMax"
            />
          </div>
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
            <label for="newName">Latitude</label>
            <input
              required="required"
              type="text"
              id="newName"
              class="form-control rounded-1 white"
              placeholder="Name"
              v-model="newLat"
            />
          </div>
          <div class="form-field">
            <label for="newName">Longitude</label>
            <input
              required="required"
              type="text"
              id="newName"
              class="form-control rounded-1 white"
              placeholder="Name"
              v-model="newLng"
            />
          </div>
          <div class="form-field d-flex fx-col">
            <label for="garage">Garage</label>
            <select
              required
              class="form-control select rounded-1 white"
              placeholder="Garage"
              v-model="newGarage"
            >
              <option value="type" disabled hidden>Garage</option>
              <option :name="i" v-for="(garage, i) in garages" :key="garage.id">
                {{ garage.name }}
              </option>
            </select>
          </div>
        </div>
        <button
          style="margin-top: 10px; background-color: #ff364f"
          class="btn txt-white rounded-2"
          type="button"
          @click="editStation(stationId)"
        >
          Edit Station
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
      newCapacityMax: '',
      newName: '',
      newGarage: '',
      garageId: '',
    };
  },
  mounted() {
    this.getGarage();
    this.getStation(this.stationId);
  },
  methods: {
      onSubmit () {
      this.errors = [];

      if (this.email) {
        this.errors.push('Email required.');
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.errors.push('Nicely formated email required.');
        } else {
          this.editUser(this.id)
          .catch((res) => {
            console.error(res)
          })
        }
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }
    },
    getStation(id) {
      return axios.get(`/api/station/show/${id}`).then((res) => {
        this.station = res.data[0];
        console.log(res.data)
        this.newCapacityMax = res.data[0].capacityMax
        this.newName  = res.data[0].name
        this.newLat = res.data[0].lat
        this.newLng = res.data[0].lng
      });
    },
    async editStation(stationId) {
      await this.getGarageIdByName(this.newGarage)
      const station = {
        id: stationId,
        capacityMax: this.newCapacityMax,
        name: this.newName,
        garage_id: this.garageId,
      };
      return axios
        .post('/api/station/editStation', station);
    },
    async getGarageIdByName(garageName) {
      await Vue.axios.get('/api/garage/getId/' + garageName)
      .then((el) => {
        this.garageId = el.data[0].id
        return el.data[0].id
      })
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
<style>
label {
  color: black;
}</style>
