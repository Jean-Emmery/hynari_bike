<template>
<div class="login-box">
	<h2>Profile</h2>
  <form action="">
  <div class="user-box">
		<input v-model="first_name" type="text" name="firstname" required="">
		<label>First Name</label>
	</div>
  <div class="user-box">
		<input v-model="last_name" type="text" name="lastname" required="">
		<label>Last Name</label>
		</div>
		<div class="user-box">
			<input v-model="email" type="text" name="email" required="">
			<label>Email</label>
		</div>
		<div class="user-box">
			<input v-model="password" type="password">
			<label for="">Password</label>
		</div>
		<a href="">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			Update
		</a>
    </form>
</div>
</template>


<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios';
import router from '../router/index';

export default defineComponent({
  data() {
    return {
      user,
      username: '',
      password: '',
      isSidenavActive: false,
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    console.log("token");
    console.log(token);
    console.log("user");
    console.log(user);

    axios.get('http://localhost:3333/api/profile', { headers: {"Authorization" : `Bearer ${token}`}})
    .then((res) => {
      console.log('test 1')
      console.log(res.data)
    })
    .catch((error) => {
      console.log('test 2')
      console.error(error)
    })
  },
  methods: {
    logout() {
      console.log(localStorage);
      console.log("logout");
      return;
    },
    login() {
      return axios.post('http://localhost:3333/api/auth/login', {
        username: this.username,
        password: this.password,
      })
      .then(el => {
        console.log("el: ");
        console.log(el);
        if (el.data.access_token) {
          localStorage.setItem('user', JSON.stringify(el.data));
        }
        router.push({ name: 'Bike'})
      })
      .catch(err => console.error(err))
    },
    }
  }
)
</script>
