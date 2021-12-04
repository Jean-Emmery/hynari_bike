<template>
  <div>
    <div class="grix shadow-1" style="height: 100vh">
      <form style="margin: 10%">
        <div class="grix xs1 sm2">
          <div class="form-field">
            <label for="firstName">FirstName</label>
            <input
              required="required"
              type="text"
              id="firstName"
              class="form-control rounded-1 white"
              placeholder="FirstName"
              v-model="pet.firstName"
            />
          </div>
          <div class="form-field">
            <label for="lastName">LastName</label>
            <input
              required="required"
              type="text"
              id="lastName"
              class="form-control rounded-1 white"
              placeholder="LastName"
              v-model="pet.lastName"
            />
          </div>
          <div class="form-field">
            <label for="birthDate">BirthDate</label>
            <input
              required="required"
              type="text"
              id="birthDate"
              class="form-control rounded-1 white"
              placeholder="BirthDate"
              v-model="pet.birthDate"
            />
          </div>
          <div class="form-field d-flex fx-col">
            <label for="type">Type</label>
            <select
              required
              class="form-control select rounded-1 white"
              placeholder="Type"
              v-model="pet.type"
            >
              <option value="type" disabled hidden>Type</option>
              <option
                :name="i"
                v-for="(categorie, i) in categories"
                :key="categorie.id"
              >
                {{ categorie }}
              </option>
            </select>
          </div>
          <div class="form-field">
            <label for="avatarPictureUrl">Avatar Picture URL</label>
            <input
              required="required"
              type="text"
              id="avatarPictureUrl"
              class="form-control rounded-1 white"
              placeholder="Avatar Picture URL"
              v-model="pet.avatarPictureUrl"
            />
          </div>
          <div class="form-field">
            <label for="coverPictureUrl">Cover Picture URL</label>
            <input
              required="required"
              type="text"
              id="coverPictureUrl"
              class="form-control rounded-1 white"
              placeholder="Cover Picture URL"
              v-model="pet.coverPictureUrl"
            />
          </div>
          <div class="form-field">
            <label for="textarea">Summary</label>
            <textarea
              required="required"
              rows="2"
              id="summary"
              class="form-control rounded-1 white"
              placeholder="Summary"
              v-model="pet.summary"
            ></textarea>
          </div>
        </div>
        <button
          style="margin-top: 10px; background-color: #ff364f"
          class="btn txt-white rounded-2"
          type="button"
          @click="editPet()"
        >
          Modifier
        </button>
      </form>
    </div>
  </div>
</template>

<style>
label {
  color: white;
}

.form-control {
  height: 60px !important;
  color: #222;
  font-size: 18px;
}
</style>

<script>
import Vue from 'vue';
import axios from 'axios';
import router from '../router';

export default {
  data() {
    return {
      petId: this.$route.params.id,
      pet: [],
      type: '',
      categories: [],
    };
  },
  mounted() {
    this.getType();
    this.getPet(this.petId);
  },
  methods: {
    getPet(id) {
      return axios.get(`/api/pet/${id}`).then((res) => {
        this.pet = res.data;
      });
    },
    editPet() {
      this.pet.birthDate = '1940-01-01T00:00:00.000Z';
      console.log(this.pet);
      return axios.post('/api/pet/editPet', this.pet).then((res) => {
        router.push('/pet');
      });
    },
    getType() {
      return Vue.axios.get('/api/pet/pet-types').then((res) => {
        if (res.status === 200) {
          this.categories = res.data;
        } else {
          console.error(res);
        }
      });
    },
  },
};
</script>
<style></style>
