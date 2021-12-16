<template>
  <div class="login-box">
    <h2>Register</h2>
    <form action="">
      <div class="user-box">
        <input v-model="firstname" type="text" name="firstname" required="" />
        <label>First Name</label>
      </div>
      <div class="user-box">
        <input v-model="lastname" type="text" name="lastname" required="" />
        <label>Last Name</label>
      </div>
      <div class="user-box">
        <input v-model="email" type="text" name="email" required="" />
        <label>Email</label>
      </div>
      <div class="user-box">
        <input v-model="password" type="password" />
        <label for="">Password</label>
      </div>
      <a @click="signUp">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Register
      </a>
    </form>
    <div class="mt-3 text-white font-s1">
      Already have an account ?
      <span class="bd-b-solid bd-1 bd-white" style="font-size: 14px"
        ><router-link to="/login">Login now</router-link></span
      >
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import axios from 'axios';
import router from '../router/index';

export default defineComponent({
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      isSidenavActive: false,
    };
  },
  methods: {
    signUp() {
      return axios.post('http://localhost:3333/api/user/register', {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        role: '1'
      })
      .then(el => {
        router.push({ name: 'Login' })
      })
      .catch(err => console.error(err))
    }
  }
})
</script>

<style>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: #ff364f;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #f1eee6;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #f1eee6;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #f1eee6;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #f1eee6;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0px;
  color: #f1eee6;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #f1eee6;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box form a:hover {
  background: #f1eee6;
  color: #ff364f;
  border-radius: 5px;
  box-shadow: 0 0 5px #f1eee6, 0 0 25px #f1eee6, 0 0 50px #f1eee6,
    0 0 100px #f1eee6;
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
  background: linear-gradient(90deg, transparent, #f1eee6);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #f1eee6);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box span:nth-child(3) {
  bottom: 0;
  tight: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #f1eee6);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #f1eee6);
  animation: btn-anim4 1s linear infinite;
  animation-dealy: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
