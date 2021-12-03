<template>
  <div style="height: 500px; width: 100%">
    <div style="height: 200px; overflow: auto">
      <p>1 GARAGE {{ firstGarage.lat }}, {{ firstGarage.lng }}</p>
      <p>1 GARAGE {{ secondGarage.lat }}, {{ secondGarage.lng }}</p>
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
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="firstGarage" @click="showFirstGarage">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="showFirstGarage">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>

      <l-marker :lat-lng="secondGarage" @click="showSecondGarage">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="showSecondGarage">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet';
import Vue from 'vue';

export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
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
  beforeMount() {
    this.getAllGarage();
  },
  mounted() {
    this.getAllGarage();
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
    showFirstGarage() {
      console.log('Premier Garage');
    },
    showSecondGarage() {
      console.log('Second Garage');
    },
    getAllGarage() {
      return Vue.axios
        .get('/api/garage')
        .then((res) => {
          console.log('vue');
        })
        .catch((err) => {
          console.error(err.toJSON());
        });
    },
  },
};
</script>
