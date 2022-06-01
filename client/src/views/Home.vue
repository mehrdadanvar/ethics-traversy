<template>
  <section class="section">
    <div class="title">
      <div class="has-size-3">Dashboard</div>
    </div>
    <h1 class="block has-background-success-lighter mb-6">
      <div>Here you can get a list of Users</div>
    </h1>
    <div class="container">
      <div class="box">
        <div class="table-container">
          <table class="table is-narrow is-full-width">
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

        <div class="button is-primary" @click="getUsers">Get from Database</div>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="box mt-6">
          <div class="card">

          </div>
        </div>
      </div>
    </section>
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