  <template>
  <div>
    <div style="height: 500px; width: 100%">
      <!-- <div style="height: 200px; overflow: auto">
        <p v-if="garages[0]">
          1 GARAGE {{ garages[0].lat }}, {{ garages[0].lng }}
        </p>
        <p v-if="garages[1]">
          2 GARAGE {{ garages[1].lat }}, {{ garages[1].lng }}
        </p>
        <p>2 GARAGE {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      </div> -->
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
                </div>
              </l-tooltip>
            </l-marker>
          </div>
        </div>
        <div v-if="bikes">
          <div v-for="bike in bikes" :key="bike.id">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
              :icon="myIcon"
              :lat-lng="[43.667,1.43333]"
              @click="showGarage(bike.id)"
            >
            </l-marker>
          </div>
        </div>
      </l-map>
    </div>
  </div>
</template>

<script>
import { latLng, icon } from 'leaflet';
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from 'vue2-leaflet';
import Vue from 'vue';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      myIcon: icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/565/565350.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      user: {},
      garages: [],
      zoom: 13,
      center: latLng(43.60579000000007, 1.448630000000037),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      userId: '',
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.user != null) {
      console.log(user.user)
      this.userId = user.user.id
    }
    this.getAllGarage();
    this.getBikesByUserId();
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
    getBikesByUserId() {
      console.log('userId: ' + this.userId); // marchze
      return Vue.axios.get('/api/bikes/my/' + this.userId).then((res) => { //donc erreur ici
        console.log("res.data") //marche
        console.log(res.data[0]);
        this.bikes = res.data[0];
        console.log("this.bikes")
        console.log(this.bikes);
      });
    },
  },
};
</script>
