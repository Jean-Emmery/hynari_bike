<template>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 100%">
      <button
        style="background-color: #ff364f; margin-top: 7%"
        class="btn rounded-2 mb-5 txt-white"
        type="button"
        @click="addPet()"
      >
        Ajouter un animal
      </button>
    </div>

    <div style="width: 80%" class="d-flex fx-wrap">
      <div class="grix xs4 gutter-xs4">
        <div class="m-1" v-for="bike in bikes" v-bind:key="bike.id">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img alt="logo" class="responsive-media" style="height: 276px" />
            </div>
            <div class="card-header">{{ bike.name }}</div>
            <div
              class="card-content"
              style="height: 200px; overflow-y: scroll"
            ></div>
            <div class="card-footer">
              <button
                class="btn airforce dark-2 mr-2 rounded-full"
                @click="takeBike(bike.id)"
              >
                <i class="mdi mdi-eye"></i>
              </button>
              <button
                class="btn error airforce ml-2 rounded-full"
                @click="putBike(bike.id)"
              >
                <i class="mdi mdi-delete"></i>
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
export default {
  data() {
    return {
      bikes: [],
      editId: null,
      garageId: this.$route.params.id,
    };
  },
  mounted() {
    this.getBikesByGarageId(this.garageId);
  },
  methods: {
    // getAllBikes() {
    //   return Vue.axios.get('/api/bikes').then((res) => {
    //     this.bikes = res.data;
    //   });
    // },
    getBikesByGarageId(garageId) {
      console.log('garageId' + garageId);
      return Vue.axios.get('/api/bikes/' + garageId).then((res) => {
        this.bikes = res.data;
      });
      // addPet() {
      //   this.$router.push({ path: '/addPet' });
      // },
      // editPet(petId) {
      //   this.$router.push({ path: '/pet/' + petId });
      // },
      // deletePet(petId) {
      //   return Vue.axios.delete('/api/pet/' + petId).then((res) => {
      //     this.getAllPets();
      //   });
    },
  },
};
</script>
<style></style>
