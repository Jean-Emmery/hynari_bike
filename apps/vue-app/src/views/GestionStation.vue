<template>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 80%" class="d-flex fx-wrap">
      <div class="grix xs2 gutter-xs4">
        <div class="m-1" v-for="station in stations" v-bind:key="station.id">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1614417599343-c7d4f6da5318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="logo"
                class="responsive-media"
                style="height: 276px"
              />
            </div>
            <div class="card-header">{{ station.id }}<br>{{ station.name }}</div>
            <div class="card-content">
              Bikes available : {{ station.capacityMax }}
            </div>
            <div class="card-footer">
              <button
                class="btn airforce dark-2 mr-2 rounded-full hoverable-3"
                @click="editStation(station.id)"
              >
                <i class="material-icons font-s2">edit</i>
              </button>
              <button
                class="btn error airforce ml-2 rounded-full hoverable-3"
                @click="deleteStation(station.id)"
              >
                <i class="material-icons font-s2">delete</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  width: auto;
  background-position: center;
  background-size: cover;
  backdrop-filter: opacity(60%);
}

label {
  color: white;
}

input {
  color: white;
}
</style>

<script>
import Vue from 'vue';
import router from '../router';
export default {
  data() {
    return {
      stations: [],
      editId: null,
      garageId: this.$route.params.id,
    };
  },
  mounted() {
    this.getAllStation();
  },
  methods: {
    getAllStation() {
      return Vue.axios.get('/api/station').then((res) => {
        this.stations = res.data;
      });
    },
    editStation(stationId) {
      this.$router.push({ path: '/station/show/' + stationId });
    },
    deleteStation(stationId) {
      console.log('testDelete');
      return Vue.axios.delete('/api/station/' + stationId).then((res) => {
        this.getAllStation();
      });
    },
  },
};
</script>
<style></style>
