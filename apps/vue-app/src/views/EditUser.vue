<template>
  <div>
    <div class="grix" style="height: 100vh">
      <form style="margin: 10%"  v-on:submit.prevent="onSubmit">
        <div class="grix xs1 sm2">
          <div class="form-field">
          <label for="firstname">Firstname</label>
          <input
            required="required"
            type="text"
            id="firstname"
            class="form-control rounded-1 white"
            placeholder=""
            v-model="firstname"
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
            v-model="lastname"
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
            v-model="email"
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
            v-model="password"
          />
        </div>
        <div v-if="my_role && my_role === '3'" class="form-field">
          <label for="Role">Role</label>
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
          type="submit"
        >
          Edit User
        </button>
      </form>
    </div>
  </div>
</template>

<style>
label {
  color: black !important;
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
      newRole: '1',
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    this.my_role = user.user.role
    this.getUser(this.userId);
  },
  methods: {
      onSubmit () {
      this.errors = [];

      if (this.email) {
        this.errors.push('Email required.');
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.errors.push('Nicely formated email required.');
        } else {
          this.editUser(this.id)
          .catch((res) => {
            console.error(res)
          })
        }
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }
    },
    getUser(id) {
      return axios.get(`/api/user/show/${id}`).then((res) => {
        this.user = res.data[0];
        this.email = res.data[0].email;
        this.firstname = res.data[0].firstname;
        this.lastname = res.data[0].lastname;
        this.password = res.data[0].password,
        this.id = res.data[0].userId;
      });
    },
    async editUser(userId) {
      const user = {
        id: this.userId,
        firstname: this.firstname,
        lastname: this.lastnme,
        password: this.password,
        email: this.email,
        role: this.newRole,
      };
      return axios
        .post('/api/user/editUser', user);
    },
    getGarage() {
      return Vue.axios.get('/api/garage/garageList').then((res) => {
        if (res.status === 200) {
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
