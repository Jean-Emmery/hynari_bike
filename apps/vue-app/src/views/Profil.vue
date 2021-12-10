<template>
<div>
	<div class="d-flex fx-wrap" style="place-content: center;height:800px;">
	    <div class="d-flex fx-wrap profil_vue">
<div class="login-box">
	<h2>Profile</h2>
  <form action="">
  <div class="user-box">
		<input v-model="firstname" type="text" name="firstname" required="">
		<label>First Name</label>
	</div>
  <div class="user-box">
		<input v-model="lastname" type="text" name="lastname" required="">
		<label>Last Name</label>
		</div>
		<div class="user-box">
			<input v-model="email" type="text" name="email" required="">
			<label>Email</label>
		</div>
		<div class="user-box">
			<input v-model="password" type="password" autocomplete="current-password">
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

    <button @click="logout">LOGOUT</button>
</div>
</div>
</div>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 80%" class="d-flex fx-wrap">
		<h2>My bikes</h2>
      <div class="grix xs3 gutter-xs4">
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
            <div class="card-content"></div>
            <div class="card-footer">
              <div class="dropdown" id="example-dropdown" data-ax="dropdown">
              <button type="button" class="btn shadow-1 rounded-1 primary dropdown-trigger">
                Station
              </button>
              <div class="dropdown-content white shadow-1 rounded-1">
                <a v-for="station in stations" v-bind:key="station.id" class="dropdown-item" href="#">{{ station.name }}</a>
              </div>
          </div>
              <button
                class="btn airforce dark-2 mr-2 rounded-full hoverable-3"
                @click="dropBike(bike.id)"
              >
                <i class="material-icons font-s2">check_circle</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios';
import router from '../router/index';
import Vue from 'vue';

export default defineComponent({
  data() {
    return {
      user: {},
      firstname: '',
      password: '',
      email: '',
      lastname: '',
      id: '',
      isSidenavActive: false,
			bikes: [],
      stations: [],
    };
  },
  created() {
    // if (localStorage.getItem('reloaded')) {
    //     // The page was just reloaded. Clear the value from local storage
    //     // so that it will reload the next time this page is visited.
    //     localStorage.removeItem('reloaded');
    // } else {
    //     // Set a flag so that we know not to reload the page twice.
    //     localStorage.setItem('reloaded', '1');
    //     location.reload();
    // }
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
      this.email = res.data.username;
      this.firstname = res.data.first_name;
      this.lastname = res.data.last_name;
      this.id = res.data.userId;
      this.getBikesByUserId(this.id)
      this.getAllStation()
      console.log('this.email')
      console.log(this.email)
      console.log('this.firstname')
      console.log(this.firstname)
      console.log('this.lastname')
      console.log(this.lastname)
      console.log('this.id')
      console.log(this.id)
    })
    .catch((error) => {
      console.log('test 2')
      console.error(error)
    })
  },
  methods: {
    logout() {
      console.log(localStorage)
      console.log("logout")
      localStorage.removeItem('user')
      router.push({ name: 'Login' })
    },
		getBikesByUserId(userId) {
      console.log('userId: ' + userId);
      return Vue.axios.get('/api/bikes/my/' + userId).then((res) => {
        this.bikes = res.data;
      });
    },
    dropBike(bikeId) {
      return Vue.axios.post('/api/bikes/drop/' + bikeId).then((res) => {
        console.log("res")
        console.log(res)
        this.bikes = res.data;
      });
    },
    getAllStation() {
      console.log('getAllStation');
      return Vue.axios.get('/api/station/').then((res) => {
        this.stations = res.data;
        console.log(this.stations);
      });
    },
  }
})
</script>


<style>

.profil_vue .login-box {
	left: unset;
}
.login-box {
	position: absolute;
	top: unset;
	width: 400px;
	padding: 40px;
	transform: translate(-50%, -50%);
  background-color: #ff364f;
	box-sizing: border-box;
	box-shadow: 0 15px 25px rgba(0,0,0,.6);
	border-radius: 10px;
}

.login-box h2 {
	margin: 0 0 30px;
	padding: 0;
	color: #F1EEE6;
	text-align: center;
}

.login-box .user-box {
	position: relative;
}

.login-box .user-box input {
	width: 100%;
	padding: 10px 0;
	font-size: 16px;
	color: #F1EEE6;
	margin-bottom: 30px;
	border: none;
	border-bottom: 1px solid #F1EEE6;
	outline: none;
	background: transparent;
}

.login-box .user-box label {
	position: absolute;
	top: 0;
	left: 0;
	padding: 10px 0;
	font-size: 16px;
	color: #F1EEE6;
	pointer-events: none;
	transition: .5s;
}

.login-box .user-box input:focus ~ label, .login-box .user-box input:valid ~ label {
	top: -20px;
	left: 0px;
	color: #F1EEE6;
	font-size: 12px;
}


.login-box form a {
	position: relative;
	display: inline-block;
	padding: 10px 20px;
	color: #F1EEE6;
	font-size: 16px;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	transition: .5s;
	margin-top: 40px;
	letter-spacing: 4px;
}

.login-box form a:hover {
	background: #F1EEE6;
	color: #ff364f;
	border-radius: 5px;
	box-shadow: 0 0 5px #F1EEE6,
							 0 0 25px #F1EEE6,
							 0 0 50px #F1EEE6,
							 0 0 100px #F1EEE6;
}

.login-box a span {
	position: absolute;
	display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #F1EEE6);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box span:nth-child(2) {
	top: -100%;
	right: 0;
	width: 2px;
	height: 100%;
	background: linear-gradient(180deg, transparent, #F1EEE6);
	animation: btn-anim2 1s linear infinite;
	animation-delay: .25s;
}

@keyframes btn-anim2 {
	0%{
		top: -100%;
	}
	50%,100% {
		top: 100%;
	}
}

.login-box span:nth-child(3){
	bottom: 0;
	tight: -100%;
	width: 100%;
	height: 2px;
	background: linear-gradient(270deg, transparent, #F1EEE6);
	animation: btn-anim3 1s linear infinite;
	animation-delay: .5s;
}

@keyframes btn-anim3 {
	0%{
		right: -100%;
	}
	50%,100% {
		right: 100%;
	}
}

.login-box span:nth-child(4) {
	bottom: -100%;
	left: 0;
	width: 2px;
	height: 100%;
	background: linear-gradient(360deg, transparent, #F1EEE6);
	animation: btn-anim4 1s linear infinite;
	animation-dealy: .75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>
