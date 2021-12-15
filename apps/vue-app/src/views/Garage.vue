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
        <div v-if="garages">
          <div v-for="garage in garages" :key="garage.id">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
              :lat-lng="[garage.lat, garage.lng]"
              @click="showGarage(garage.id)"
            >
              <l-tooltip>
                <div>
                  <span v-if="garages[garage.id]">{{
                    garages[garage.id].name
                  }}</span>
                </div>
              </l-tooltip>
            </l-marker>
          </div>
        </div>
        <div v-if="stationsDisplay">
          <div v-for="station in stationsDisplay" :key="station.id">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
            v-if='station.id'
              :lat-lng="[station.lat, station.lng]"
              @click="showStation(station.id)"
            >
              <l-tooltip>
                <div>
                  <span v-if="stations[station.id]">{{
                    stationsDisplay[station.id].name
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
              :lat-lng="[bikes.lat,bikes.lng]"
              @click="showInfo(bikes)"
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
    LTooltip,
    LIcon
  },
  data() {
    return {
      myIcon: icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/565/565350.png",
        iconSize: [32, 64],
        iconAnchor: [16, 37]
      }),
      user: {},
      garages: [],
      garagesDisplay: [],
      stations: [],
      stationsDisplay: [],
      bikes: [],
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
      staticAnchor: [16, 37],
      iconSize: 64,
      bike_headline: "",
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
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.user != null) {
      console.log(user.user)
      this.userId = user.user.id
      this.getBikesByUserId();
    }
    this.getAllGarage();
    this.getAllStation();
  },
  methods: {
    showInfo(bike) {
      console.log("showInfo")
      console.log(bike)
    },

    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    },

    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    showGarage(id) {
      console.log("showGarage")
      console.log(this.garages)
      console.log("garageId")
      console.log(id)
      console.log("garageId2")
      console.log(this.garages[id - 1])
      this.$router.push({ path: '/station/' + this.garages[id - 1].id });
    },
    showStation(id) {
      console.log('showStation:id')
      console.log(id)
      this.$router.push({ path: '/bikes/' + id });
    },
    getAllGarage() {
    console.log("getAllGarage()")
      return Vue.axios.get('/api/garage').then((res) => {
        console.log("res")
        console.log(res)
        this.garages = res.data;
        console.log("this.garages")
        console.log(this.garages)
      });
    },
    getAllStation() {
    console.log("getAllStation()")
      return Vue.axios.get('/api/station/').then((res) => {
        console.log("res")
        console.log(res)
        this.stations = res.data;
        this.stationsDisplay = [{ id: 0}].concat(this.stations)
        console.log("this.stations")
        console.log(this.stations)
        console.log("this.stationsDisplay")
        console.log(this.stationsDisplay)
      });
    },
    getBikesByUserId() {
      console.log('userId: ' + this.userId); // marchze
      return Vue.axios.get('/api/bikes/my/' + this.userId).then((res) => { //donc erreur ici
      console.log(res)
        this.bikes = res.data[0];
        console.log("this.res.data[0]")
        console.log( res.data);
        console.log("this.bikes")
        console.log(this.bikes);
      });
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
