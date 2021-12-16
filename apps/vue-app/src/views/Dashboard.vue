<template>
  <div>
    <div style="height: 500px; width: 100%" v-if="role == '2'">
      <!-- <div style="height: 200px; overflow: auto">
        <p v-if="garages[0]">
          1 GARAGE {{ garages[0].lat }}, {{ garages[0].lng }}
        </p>
        <p v-if="garages[1]">
          2 GARAGE {{ garages[1].lat }}, {{ garages[1].lng }}
        </p>
        <p>2 GARAGE {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
              @click="showGarage(garage.id)"
        :options="mapOptions"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      </div> -->
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"

      >
        <div v-if="stationsDisplay">
          <div v-for="station in stationsDisplay" :key="station.id">
            <div v-if="station.id > 0">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
            v-if='station.id'
              :lat-lng="[station.lat, station.lng]"
              @click="getStation(station)"
            >
              <l-tooltip>
                <div>
                  <span v-if="station.name">{{
                    station.name
                  }}</span>
                </div>
              </l-tooltip>
            </l-marker>
            </div>
          </div>
        </div>
        <div v-if="bikesDisplay">
          <div v-for="bike in bikesDisplay" :key="bike.id">
            <div v-if="bike.id > 0">
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-marker
                :icon="myIcon"
                :lat-lng="[bike.lat,bike.lng]"
                @click="showInfo(bike)"
              >
              <l-icon
                :icon-anchor="staticAnchor"
                class-name="someExtraClass"
              >
                <img class="bike_logo" src="https://cdn-icons-png.flaticon.com/512/565/565350.png">
              </l-icon>
              </l-marker>
            </div>
          </div>
        </div>

      </l-map>
    </div>
    <div v-if="admin">
      <div class="card shadow-1 fx-row">
        <div
          class="d-flex vcenter fx-center px-4 text-white"
          style="background-color: #ff364f; width: 15%"
        >
          <h4>PARC</h4>
        </div>
        <div class="flex fx-col fx-grow">
          <div class="card-header">
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3 white"
              style="background-color: #ff364f; color: white"
              @click="showGarages"
            >
              <i class="material-icons font-s2">visibility</i>
            </button>
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3"
              style="background-color: #ff364f; color: white"
              @click="addGarage"
            >
              <i class="material-icons font-s2">add_circle_outline</i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="admin">
      <div class="card shadow-1 fx-row">
        <div
          class="d-flex vcenter fx-center px-4 text-white"
          style="background-color: #ff364f; width: 15%"
        >
          <h4>USERS</h4>
        </div>
        <div class="flex fx-col fx-grow">
          <div class="card-header">
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3 white"
              style="background-color: #ff364f; color: white"
              @click="showUser"
            >
              <i class="material-icons font-s2">visibility</i>
            </button>
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3"
              style="background-color: #ff364f; color: white"
              @click="addUser"
            >
              <i class="material-icons font-s2">add_circle_outline</i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="moderator">
      <div class="card shadow-1 fx-row">
        <div
          class="d-flex vcenter fx-center px-4 text-white"
          style="background-color: #ff364f; width: 15%"
        >
          <h4>BIKES</h4>
        </div>
        <div class="flex fx-col fx-grow">
          <div class="card-header">
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3 white"
              style="background-color: #ff364f; color: white"
              @click="showBikes"
            >
              <i class="material-icons font-s2">visibility</i>
            </button>
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3"
              style="background-color: #ff364f; color: white"
              @click="addBike"
            >
              <i class="material-icons font-s2">add_circle_outline</i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="moderator">
      <div class="card shadow-1 fx-row">
        <div
          class="d-flex vcenter fx-center px-4 text-white"
          style="background-color: #ff364f; width: 15%"
        >
          <h4>STATIONS</h4>
        </div>
        <div class="flex fx-col fx-grow">
          <div class="card-header">
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3 white"
              style="background-color: #ff364f; color: white"
              @click="showStation"
            >
              <i class="material-icons font-s2">visibility</i>
            </button>
            <button
              class="btn dark-2 mr-2 rounded-2 hoverable-3"
              style="background-color: #ff364f; color: white"
              @click="addStation"
            >
              <i class="material-icons font-s2">add_circle_outline</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import router from '../router';
import axios from 'axios';
import { latLng, icon } from 'leaflet';
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LIcon
  },
  data() {
    return {
      moderator: false,
      admin: false,
      role: '0',

      myIcon: icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/565/565350.png",
        iconSize: [32, 64],
        iconAnchor: [16, 37]
      }),

      stations: [],
      stationsDisplay: [],
      bikes: [],
      bikesDisplay: [],
      zoom: 13,
      center: latLng(43.60579000000007, 1.448630000000037),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showMap: true,
      userId: '',
      staticAnchor: [16, 37],
      iconSize: 64,
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  mounted() {//JSON.
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    console.log("token");
    console.log(token);
    console.log("user");
    console.log(user);

    if (user && user.user.role === "2") {
      this.moderator = true
      this.role = user.user.role
    }
    if (user && user.user.role === "3") {
      this.admin = true
      this.role = user.user.role
    }
    console.log(this.moderator);
    console.log(this.admin);

    if (user.user != null) {
      console.log(user.user)
      this.userId = user.user.id
    }
      this.getAllBikes();
    this.getAllStation();
  },
  methods: {
    showInfo(bike) {
      console.log("showInfo")
      console.log(bike)
    },
    getStation(id) {
      console.log('showStation:id')
      console.log(id)
      this.$router.push({ path: '/bikes/' + id });
    },
    getAllStation() {
    console.log("getAllStation()")
      return Vue.axios.get('/api/station/')
      .then((res) => {
        console.log("res")
        console.log(res)
        this.stations = res.data;
        this.stationsDisplay = [{ id: 0, lat: 1.01, lng: 1.01, name: "1" }].concat(this.stations)
        console.log("this.stations")
        console.log(this.stations)
        console.log("this.stationsDisplay")
        console.log(this.stationsDisplay)
      })
      .catch((err) => {
        console.error(err)
      })
    },
    getAllBikes() {
      console.log('getAllBikes'); // marchze
      return Vue.axios.get('/api/bikes/').then((res) => { //donc erreur ici
        console.log("res")
        console.log(res)
        this.bikes = res.data;
        this.bikesDisplay = [{ id: 0, lat: 1.01, lng: 1.01, name: "1" }].concat(this.bikes)
        console.log("this.bikes")
        console.log(this.bikes)
        console.log("this.bikesDisplay")
        console.log(this.bikesDisplay)
      })
      .catch((err) => {
        console.error(err)
      })
    },
    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    },
    showGarages() {
      this.$router.push({ path: '/gestionGarages' });
    },
    addGarage() {
      this.$router.push({ path: '/addGarage' });
    },
    showBikes() {
      this.$router.push({ path: '/gestionBikes' });
    },
    addBike() {
      this.$router.push({ path: '/addBike' });
    },
    showStation() {
      this.$router.push({ path: '/gestionStation' });
    },
    addStation() {
      this.$router.push({ path: '/addStation' });
    },
    showUser() {
      this.$router.push({ path: '/gestionUser' });
    },
    addUser() {
      this.$router.push({ path: '/addUser' });
    },
  },
};
</script>

<style>
.someExtraClass {
  border-radius: 0 20px 20px 20px;
  font-size: 15px;
  color: black;
  font-weight: bold;
  text-decoration: none
}
.bike_logo {
  width: 20px;
  height: 20px;
}
.bike_headline {
    background-color: #ffffff29;
    width: 70px;
}
</style>
