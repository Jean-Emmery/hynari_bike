<template>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 80%" class="d-flex fx-wrap">
      <div class="grix xs4 gutter-xs4">
        <div class="m-1" v-for="bike in bikes" v-bind:key="bike.id">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img
                :src="bike.pictureUrl"
                alt="logo"
                class="responsive-media"
                style="height: 276px"
              />
            </div>
            <div class="card-header">{{ bike.name }}</div>
            <div
              class="card-content"
              style="height: 200px; overflow-y: scroll"
            ></div>
            <div class="card-footer">
              <button
                class="btn airforce dark-2 mr-2 rounded-full hoverable-3"
                @click="editBike(bike.id)"
              >
                <i class="material-icons font-s2">edit</i>
              </button>
              <button
                class="btn error airforce ml-2 rounded-full hoverable-3"
                @click="deleteBike(bike.id)"
              >
                <i class="material-icons font-s2">delete</i>
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
    this.getAllBikes();
  },
  methods: {
    getAllBikes() {
      return Vue.axios.get('/api/bikes').then((res) => {
        this.bikes = res.data;
      });
    },
    editBike(bikeId) {
      this.$router.push({ path: '/bikes/show/' + bikeId });
    },
    deleteBike(bikeId) {
      console.log('testDelete');
      return Vue.axios.delete('/api/bikes/' + bikeId).then((res) => {
        this.getAllBikes();
      });
    },
  },
};
</script>
<style></style>
