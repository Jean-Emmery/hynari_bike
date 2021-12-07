<template>
  <div>
    <div style="height: 500px; width: 100%">
      <div style="height: 200px; overflow: auto">
        <p v-if="garages[0]">
          1 GARAGE {{ garages[0].lat }}, {{ garages[0].lng }}
        </p>
        <p v-if="garages[1]">
          2 GARAGE {{ garages[1].lat }}, {{ garages[1].lng }}
        </p>
        <p>2 GARAGE {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      </div>
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 80%"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      >
        <div v-if="garages">
          <div v-for="garage in garages" :key="garage.id">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
              :lat-lng="garages[garage.id]"
              @click="showGarage(garage.id)"
            >
              <l-tooltip :options="{ permanent: true, interactive: true }">
                <div @click="showGarage(garage.id)">
                  <span v-if="garages[garage.id]">{{
                    garages[garage.id].name
                  }}</span>
                  <p v-show="showParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                    sollicitudin nisi. Donec finibus semper metus id malesuada.
                  </p>
                </div>
              </l-tooltip>
            </l-marker>
          </div>
        </div>

        <div v-if="bikes">
          <div v-for="bike in bikes" :key="bike.id">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker :lat-lng="bikes[bike.id]" @click="showBike(bike.id)">
              <l-tooltip :options="{ permanent: true, interactive: true }">
                <div @click="showBike(bike.id)">
                  <span v-if="bikes[bike.id]">{{ bikes[bike.id].name }}</span>
                  <p v-show="showParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                    sollicitudin nisi. Donec finibus semper metus id malesuada.
                  </p>
                </div>
              </l-tooltip>
            </l-marker>
          </div>
        </div>
      </l-map>
    </div>
    <div class="grix xs4 gutter-xs4" style="margin-top: 15%">
      <div class="m-1" v-for="garage in garages" v-bind:key="garage.id">
        <div class="card shadow-3 rounded-3 grey light-4">
          <div class="card-image">
            <img
              src="https://www.citycle.com/wp-content/uploads/2016/09/parking-stationnement-pour-velos-securis.jpg"
              alt="logo"
              class="responsive-media"
              style="height: 276px"
            />
          </div>
          <div class="card-header">{{ garage.name }}</div>
          <div class="card-content" style="height: 200px; overflow-y: scroll">
            Quantity :{{ garage.capacityMax }}<br />
            Latitude : {{ garage.lat }}<br />
            Longitude : {{ garage.lng }}
          </div>
          <div class="card-footer">
            <button
              class="btn airforce dark-2 mr-2 rounded-full hoverable-3"
              @click="editGarage(garage.id)"
            >
              <i class="material-icons font-s2">edit</i>
            </button>
            <button
              class="btn error airforce ml-2 rounded-full hoverable-3"
              @click="deleteGarage(garage.id)"
            >
              <i class="material-icons font-s2">delete</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet';
import Vue from 'vue';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      bikes: [],
      garages: [],
      zoom: 13,
      center: latLng(43.60579000000007, 1.448630000000037),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      firstGarage: latLng(43.61166001000052, 1.4933399863044485),
      secondGarage: latLng(43.6105987586592, 1.4303827828545141),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  mounted() {
    this.getAllGarage();
    this.getAllBikes();
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    showGarage(id) {
      this.$router.push({ path: '/editGarage/' + this.garages[id].id });
    },
    getAllGarage() {
      return Vue.axios.get('/api/garage').then((res) => {
        this.garages = res.data;
        console.log(this.garages);
      });
    },
    getAllBikes() {
      return Vue.axios
        .get('/api/garage/getAll')
        .then((res) => {
          this.bikes = res.data;
          console.log('toto' + this.bikes);
        })
        .catch((err) => console.error(err));
    },
    deleteGarage(garageId) {
      console.log('testDeleteG');
      return Vue.axios.delete('/api/garage/' + garageId).then((res) => {
        this.getAllGarage();
      });
    },
  },
};
</script>
