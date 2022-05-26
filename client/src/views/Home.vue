<template>
  <section class="section">
    <div class="title">Dashboard</div>
    <div class="content">this is some content</div>
    <div class="container">
      <div class="box">
        <div class="table-container">
          <table class="table is-narrow is-fullwidth">
            <th>Identifier</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email Address</th>
            <tr v-for="user in usersList" v-bind:key="user.id">
              <td>{{ user._id }}</td>
              <td>{{ user.firstname }}</td>
              <td>{{ user.lastname }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </table>
        </div>

        <div class="button is-success" @click="getUsers">Get from Database</div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usersList: undefined,
    };
  },
  components: {},
  methods: {
    getUsers: function () {
      console.log("I was clicked");
      axios
        .get("http://localhost:5000/api/users")
        .then((response) => {
          console.log(response.data);
          this.usersList = response.data.test;
        })
        .then((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>