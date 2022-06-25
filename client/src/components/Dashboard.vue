<template>
  <section class="section">
    <div class="left">
      <div class="container">
        <div class="box">
          <div class="row">
            <h1 class="text">Welcome Professor Pathak</h1>
            <p class="text is-italic" v-bind:key="date">
              {{ now.getFullYear() }}-{{ now.getMonth() }}-{{ now.getDate() }}
            </p>
          </div>
          <br />
          <img src="../../../../../Downloads/proff.jpg" alt="mehrdad" />
          <br />
          <button class="button is-danger is-small">log out</button>
        </div>
        <div class="container">
          <div class="box">
            <table class="table">
              <th>Users</th>
              <th>Posted Articles</th>
              <th>Cases Published</th>
              <th>Chapters Completed</th>
              <tbody>
                <tr>
                  <td>{{ Math.round(Math.random() * 10) }}</td>
                  <td>{{ Math.round(Math.random()) * 10 }}</td>
                  <td>{{ Math.round(Math.random()) * 10 }}</td>
                  <td>{{ Math.round(Math.random()) * 10 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <section class="container">
        <div class="title">
          <div class="has-size-3">Adminstrator home</div>
        </div>
        <h1 class="block has-background-success-lighter mb-6">
          <div>Here you can get a list of Users</div>
        </h1>
        <div class="container">
          <div class="box">
            <div class="table-container">
              <table class="table is-narrow is-full-width">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email Address</th>
                <th>Identifier</th>
                <tr v-for="user in usersList" v-bind:key="user.id">
                  <td>{{ user.firstname }}</td>
                  <td>{{ user.lastname }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user._id }}</td>
                </tr>
              </table>
            </div>
            <div class="button is-primary" @click="getUsers">Get from Database</div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      usersList: undefined,
      now: new Date(),
      date: `${new Date().getFullYear()}`,
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

<style scoped>
.section {
  display: grid;
  background-color: rgb(246, 239, 231);
  grid-template-columns: 1fr 10fr;
  column-gap: 1rem;
}
img {
  border-radius: 5rem;
  width: 70px;
  border-width: 1px;
  box-shadow: 2px 2px 30px rgb(108, 10, 220);
}
.box {
  border-radius: 1rem;
  box-shadow: 1px 2px 10px rgb(45, 33, 59);
}
</style>
