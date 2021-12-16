  <template>
  <div>
    <div style="height: 730px; width: 100%">
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"

      >
        <div v-if="garagesDisplay">
          <div v-for="garage in garagesDisplay" :key="garage.id">
            <div v-if="garage.id > 0">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
              :icon="myIconGarage"
              :lat-lng="[garage.lat, garage.lng]"
              @click="showGarage(garage.id)"
            >
              <l-tooltip>
                <div>
                  <span v-if="garage.name">{{
                    garage.name
                  }}</span>
                </div>
              </l-tooltip>
            </l-marker>
            </div>
          </div>
        </div>
        <div v-if="stationsDisplay">
          <div v-for="station in stationsDisplay" :key="station.id">
            <div v-if="station.id > 0">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
            v-if='station.id'
              :lat-lng="[station.lat, station.lng]"
              @click="showStation(station.id)"
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
        <div>
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker
              :icon="myIcon"
              :lat-lng="[my_lat,my_lng]"
            >
            <l-icon
              :icon-anchor="staticAnchor"
              class-name="someExtraClass"
            >
              <img class="bike_logo" src="https://cdn-icons-png.flaticon.com/512/565/565350.png">
            </l-icon>
            </l-marker>
          </div>
      </l-map>
    </div>
  <div>
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{socketMessage}}"</p>
    <button @click="pingServer()">Ping Server</button>
  </div>

            <div class="row">
                <div class="col-md-6 offset-md-3 col-sm-12">
                    <h1 class="text-center">{{ title }}</h1>
                    <br>
                    <div id="status"></div>
                    <div id="chat">
                        <input type="text" v-model="name" id="username" class="form-control" placeholder="Enter name...">
                        <br>
                        <div class="card">
                            <div id="messages" class="card-block">
                                <ul>
                                    <li v-for="message of messages" :key="message">{{ message.name }}: {{ message.text }}</li>
                                </ul>
                            </div>
                        </div>
                        <br>
                        <textarea id="textarea" class="form-control" v-model="text" placeholder="Enter message..."></textarea>
                        <br>
                        <button id="send" class="btn" @click.prevent="sendMessage">Send</button>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import { latLng, icon } from 'leaflet';
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from 'vue2-leaflet';
import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import {Action, Getter, Mutation} from "vuex-class"
import io from 'socket.io-client';
import { setInterval } from 'timers';

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
      myIconGarage: icon({
        iconUrl: "https://costesromain.fr/pin_rouge.png",
        iconSize: [64, 64],
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

      isConnected: false,
      socketMessage: '',
      title: 'Nestjs Websockets Chat',
      name: '',
      text: '',
      messages: [],
      socket: null,

      my_lat: 0,
      my_lng: 0,
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
  created() {
    this.socket = io('http://localhost:3333/', {transports: ['websocket'], secure: false})
    this.socket.on('msgToClient', (message) => {
      this.receivedMessage(message)
    })
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.user != null) {
      this.userId = user.user.id
      this.getBikesByUserId();
    }
    this.getAllGarage();
    this.getAllStation();
    setInterval(() => {
      this.getActualPosition().then((pos) => {
        this.my_lat = pos.coords.latitude
        this.my_lng = pos.coords.longitude
        this.sendPosition()
      });
    }, 3000);
  },
  methods: {
    getActualPosition() {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej)
      });
    },
    sendPosition() {
      if(this.my_lat && this.my_lng) {
        const position = {
          id: this.bikes.id,
          lat: this.my_lat,
          lng: this.my_lng
        }
      this.socket.emit('posToServer', position)
      this.text = ''
      }
    },
    receivedMessage(message) {
      this.messages.push(message)
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
      this.$router.push({ path: '/station/' + this.garages[id - 1].id });
    },
    showStation(id) {
      this.$router.push({ path: '/bikes/' + id });
    },
    getAllGarage() {
      return Vue.axios.get('/api/garage').then((res) => {
        this.garages = res.data;
        this.garagesDisplay = [{ id: 0 }].concat(this.garages)
      });
    },
    getAllStation() {
      return Vue.axios.get('/api/station/').then((res) => {
        this.stations = res.data;
        this.stationsDisplay = [{ id: 0 }].concat(this.stations)
      });
    },
    getBikesByUserId() {
      return Vue.axios.get('/api/bikes/my/' + this.userId).then((res) => { //donc erreur ici
        this.bikes = res.data[0];
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
