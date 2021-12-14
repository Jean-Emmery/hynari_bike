<template>
  <div>
    <div class="grix" style="height: 100vh">
      <form style="margin: 10%">
        <div class="grix xs1 sm2">
          <div class="form-field">
          <label for="firstname">Firstname</label>
          <input
            required="required"
            type="text"
            id="firstname"
            class="form-control rounded-1 white"
            placeholder=""
            v-model="newFirstname"
          />
        </div>
        <div class="form-field">
          <label for="lastname">Lastname</label>
          <input
            required="required"
            type="text"
            id="lastname"
            class="form-control rounded-1 white"
            placeholder=""
            v-model="newLastname"
          />
        </div>
        <div class="form-field">
          <label for="email">Mail</label>
    <span class="input-group-addon" id="basic-addon1"><span class="fa fa-envelope"></span></span>
          <input
            required="required"
            type="email"
            id="email"
            class="form-control rounded-1 white"
            placeholder=""
            v-model="newEmail"
          />
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input
            required="required"
            type="password"
            id="password"
            class="form-control rounded-1 white"
            placeholder=""
            v-model="newPassword"
          />
        </div>
        <div v-if="my_role && my_role === '3'" class="form-field">
          <label for="mail">Role</label>
          <select v-model="newRole">
          <option value="1">User</option>
          <option value="2">Modérateur</option>
          <option value="3">Admin</option>
          </select>
        </div>
      </div>
        <button
          style="margin-top: 10px; background-color: #ff364f"
          class="btn txt-white rounded-2"
          type="button"
          @click="editUser(userId)"
        >
          Edit Station
        </button>
      </form>
    </div>
  </div>
</template>

<style>
label {
  color: black;
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
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      role: '1',
      my_role: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      userId: this.$route.params.id,
      user: [],
      garages: [],
      newFirstname: '',
      newLastname: '',
      newPassword: '',
      newEmail: '',
      newRole: '1',
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    console.log("token");
    console.log(token);
    console.log("user");
    console.log(user);
    this.my_role = user.user.role
    console.log("my_role");
    console.log(this.my_role);
    this.getUser(this.userId);
  },
  methods: {
    getUser(id) {
      console.log("getUser:id")
      console.log(id)
      return axios.get(`/api/user/show/${id}`).then((res) => {
        console.log("res:")
        console.log(res.data[0])
        this.user = res.data[0];
      });
    },
    async editUser(userId) {
      const user = {
        id: this.userId,
        firstname: this.newFirstname,
        lastname: this.newLastname,
        password: this.newPassword,
        email: this.newEmail,
        role: this.newRole,
      };
      console.log("EditUser:user");
      console.log(user);
      return axios
        .post('/api/user/editUser', user)
        .then(console.log('edit user'));
    },
    getGarage() {
      return Vue.axios.get('/api/garage/garageList').then((res) => {
        if (res.status === 200) {
          console.log("res.data")
          console.log(res.data);
          this.garages = res.data;
        } else {
          console.error(res);
        }
      });
    },
  },
};
</script>
<style></style>
