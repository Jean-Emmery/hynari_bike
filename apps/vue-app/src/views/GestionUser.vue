<template>
  <div class="d-flex fx-wrap" style="place-content: center">
    <div style="width: 80%" class="d-flex fx-wrap">
      <div class="grix xs4 gutter-xs4">
        <div class="m-1" v-for="user in users" v-bind:key="user.id">
          <div class="card shadow-3 rounded-3 grey light-4">
            <div class="card-image">
              <img
                src="https://costesromain.fr/user_icon.png"
                alt="logo"
                class="responsive-media"
                style="height: 276px"
              />
            </div>
            <div class="card-header">{{ user.firstname }} {{ user.lastname }}</div>
            <div class="card-content">
              Email: {{ user.email }}<br>
              Role :
              <span v-if="user.role === '1'">User</span>
              <span v-if="user.role === '2'">Modérateur</span>
              <span v-if="user.role === '3'">Admin</span>
            </div>
            <div class="card-footer">
              <button
                class="btn airforce dark-2 mr-2 rounded-2 hoverable-3"
                @click="editUser(user.id)"
              >
                <i class="material-icons font-s2">edit</i>
              </button>
              <button
                v-if="my_role && my_role === '3'"
                class="btn error airforce ml-2 rounded-2 hoverable-3"
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
    this.my_role = user.user.role

    this.getAllUser();
  },
  methods: {
    getAllUser() {
      return Vue.axios.get('/api/user/getAll').then((res) => {
        if (res.status === 200) {
          this.users = res.data;
        } else {
          console.error(res);
        }
      });
    },
    editUser(userId) {
      this.$router.push({ path: '/user/show/' + userId });
    },
    deleteUser(userId) {
      return Vue.axios.delete('/api/user/' + userId).then((res) => {
        this.getAllUser();
      });
    },
  },
};
</script>
<style></style>
