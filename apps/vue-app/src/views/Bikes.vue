<template>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 80%" class="d-flex fx-wrap">
      <div class="grix xs3 gutter-xs4">
        <div class="m-1" v-for="bike in bikes" v-bind:key="bike.id">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img
                :src="bike.pictureUrl"
                alt="logo"
                class="responsive-media"
                style="height: 276px"
              />
            </div>
            <div class="card-header">{{ bike.name }}</div>
            <div class="card-content"></div>
            <div class="card-footer">
              <button
                class="btn airforce dark-2 mr-2 rounded-2 hoverable-3"
                @click="pickUpBike(bike.id)"
              >
                <i class="material-icons font-s2">check_circle</i>
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
import axios from 'axios';

export default {
  data() {
    return {
      user: {},
      bikes: [],
      editId: null,
      garageId: this.$route.params.id,
      stationId: this.$route.params.id,
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('user found');
      this.user = user;
    } else {
      console.log('user not found');
    }
    this.getBikesUpByStationId(this.stationId);
    //getBikesUpByStationId(this.stationId);
  },
  methods: {
    // getAllBikes() {
    //   return Vue.axios.get('/api/bikes').then((res) => {
    //     this.bikes = res.data;
    //   });
    // },
    // getBikesByStationId(stationId) {
    //   console.log('stationId' + stationId);
    //   return Vue.axios.get('/api/bikes/' + stationId).then((res) => {
    //     this.bikes = res.data;
    //   });
    // },
    getBikesUpByStationId(stationId) {
      console.log('stationId' + stationId);
      return Vue.axios.get('/api/bikes/' + stationId).then((res) => {
        console.log('res.data');
        console.log(res.data);
        this.bikes = res.data;
      });
    },
    pickUpBike(bikeId) {
      console.log('veloid id' + bikeId);
      console.log('user: ');
      console.log(this.user.user.id);
      const bike = {
        id: bikeId,
        user_id: this.user.user.id,
        station_id: '0',
      };

      return axios
        .post('/api/bikes/pickUpBike', bike)
        .then(router.push({ name: 'Profil' }));
    },
  },
};
</script>
<style></style>
