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
      </l-map>
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
      this.$router.push({ path: '/station/' + this.garages[id].id });
    },
    getAllGarage() {
      return Vue.axios.get('/api/garage').then((res) => {
        this.garages = res.data;
      });
    },
  },
};
</script>
