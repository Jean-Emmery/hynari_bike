<template>
  <div>
    <div v-if="moderator">
      <h1>GARAGE :</h1>
      <button class="btn blue" @click="showGarages">Show List</button>
      <button class="btn blue" @click="addGarage">Add Garage</button>
    </div>
    <div v-if="moderator">
      <h1>BIKES :</h1>
      <button class="btn blue" @click="showBikes">Show List</button>
      <button class="btn blue" @click="addBike">Add Bike</button>
    </div>
    <div v-if="admin">
      <h1>STATIONS :</h1>
      <button class="btn blue" @click="showStation">Show List</button>
      <button class="btn blue" @click="addStation">Add Station</button>
    </div>
    <div v-if="admin">
      <h1>USERS :</h1>
      <button class="btn blue" @click="showUser">Show List</button>
      <button class="btn blue" @click="addUser">Add User</button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import router from '../router';

export default {
  data() {
    return {
      moderator: false,
      admin: false,
    };
  },
  beforeCreated() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    console.log("token");
    console.log(token);
    console.log("user");
    console.log(user);

    if (user && user.user.role === "2") {
      this.moderator = true
    }
    if (user && user.user.role === "3") {
      this.admin = true
    }
    console.log(this.moderator);
    console.log(this.admin);
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    console.log("token");
    console.log(token);
    console.log("user");
    console.log(user);

    if (user && user.user.role === "2") {
      this.moderator = true
    }
    if (user && user.user.role === "3") {
      this.admin = true
    }
    console.log(this.moderator);
    console.log(this.admin);
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    console.log("token");
    console.log(token);
    console.log("user");
    console.log(user);

    if (user && user.user.role === "2") {
      this.moderator = true
    }
    if (user && user.user.role === "3") {
      this.admin = true
    }
    console.log(this.moderator);
    console.log(this.admin);
  },
  methods: {
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
