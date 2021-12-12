<template>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 80%" class="d-flex fx-wrap">
      <div class="grix xs2 gutter-xs4">
        <div class="m-1">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img
                src="https://www.cc-paysdepontchateau.fr/medias/2015/08/Banniere-velo-rando.jpg"
                alt="logo"
                class="responsive-media"
                style="height: 276px"
              />
            </div>
            <div class="card-content">
              <button
                class="btn airforce dark-2 mr-2 hoverable-3"
                @click="showGarages()"
              >
                Edit Garage
              </button>

              <button
                class="btn airforce dark-2 mr-2 hoverable-3"
                @click="addGarage()"
              >
                Add Garage
              </button>
            </div>
          </div>
        </div>
        <div class="m-1">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img
                src="https://www.hellowp.com/wp-content/uploads/2018/06/users.png"
                alt="logo"
                class="responsive-media"
                style="height: 276px"
              />
            </div>
            <div class="card-content">
              <button
                class="btn airforce dark-2 mr-2 hoverable-3"
                @click="showUsers()"
              >
                Edit Users
              </button>

              <button
                class="btn airforce dark-2 mr-2 hoverable-3"
                @click="addUsers()"
              >
                Add Users
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import router from '../router';

export default {
  methods: {
    showGarages() {
      this.$router.push({ path: '/gestionGarages' });
    },
    addGarage() {
      this.$router.push({ path: '/addGarage' });
    },
  },
};
</script>
