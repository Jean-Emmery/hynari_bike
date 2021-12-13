<template>
  <div class="grix" style="height: 100vh">
    <form style="margin: 10%" v-on:submit.prevent="onSubmit">
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
          <label for="mail">Role</label>
          <select v-model="role">
          <option value="1">User</option>
          <option value="2">Modérateur</option>
          <option value="3">Admin</option>
          </select>
        </div>
      </div>
      <button
        style="margin-top: 10px; background-color: #ff364f"
        class="btn rounded-2 text-white"
        type="submit"
      >
        New Users
      </button>
    </form>
  </div>
</template>

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
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
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
  },
  methods: {
      onSubmit () {
        console.log('on submit')
      this.errors = [];

      if (this.email) {
        console.log('on submit 2')
        this.errors.push('Email required.');
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          console.log('on submit 3')
          this.errors.push('Nicely formated email required.');
        } else {
          this.addUser()
          .then((el) => {
            console.log(el)
          })
          .catch((res) => {
            console.error(res)
          })
          this.email = ''
          this.password = ''
        }
      } else {
        console.log('on submit 4')
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }
    },
    addUser() {
    console.log('this.email')
    console.log(this.email)
      const user = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        role: this.role,
      };
      console.log('user')
      console.log(user);
      return axios.post('/api/user/new', user).then(console.log('post'));
    },
  },
};
</script>
<style></style>
