<template>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 80%" class="d-flex fx-wrap">
      <div class="grix xs2 gutter-xs4">
        <div class="m-1" v-for="user in users" v-bind:key="user.id">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1614417599343-c7d4f6da5318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="logo"
                class="responsive-media"
                style="height: 276px"
              />
            </div>
            <div class="card-header">{{ user.firstname }} {{ user.lastname }}</div>
            <div class="card-content">
              Email: {{ user.email }}<br>
              role :
              <span v-if="user.role === '1'">User</span>
              <span v-if="user.role === '2'">Modérateur</span>
              <span v-if="user.role === '3'">Admin</span>
            </div>
            <div class="card-footer">
              <button
                class="btn airforce dark-2 mr-2 rounded-full hoverable-3"
                @click="editStation(user.id)"
              >
                <i class="material-icons font-s2">edit</i>
              </button>
              <button
                v-if="my_role && my_role === '3'"
                class="btn error airforce ml-2 rounded-full hoverable-3"
                @click="deleteUser(user.id)"
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
      users: [],
      role: '',
      my_role: '',
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

    this.getAllUser();
  },
  methods: {
    getAllUser() {
      console.log('GestionUser:getAllUser')
      return Vue.axios.get('/api/user/getAll').then((res) => {
        if (res.status === 200) {
          console.log('GestionUser:res')
          console.log(res)
          this.users = res.data;
        } else {
          console.error(res);
        }
      });
    },
    editStation(stationId) {
      this.$router.push({ path: '/station/show/' + stationId });
    },
    deleteUser(userId) {
      console.log('deleteUser:userId');
      console.log(userId)
      return Vue.axios.delete('/api/user/' + userId).then((res) => {
        console.log("res")
        console.log(res)
        this.getAllUser();
      });
    },
  },
};
</script>
<style></style>
