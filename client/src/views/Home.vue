<template>
  <div class="head-container">
    <section class="section">
      <div class="row-1">
        <div class="left">
          <div class="title is-size-2">Start Contributing to your University Ethics Project</div>
          <p class="text is-size-4 has-text-grey">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde facilis similique
            recusandae corporis! Numquam quia rerum alias? Quos fuga molestias dolores et ipsam
            totam itaque doloribus sint magni! Cupiditate, tenetur?
          </p>
        </div>
        <div class="right">
          <img src="../../src/assets/start-illustration.svg" alt="image" />
          <h2></h2>
        </div>
      </div>
      <div class="row-2">
        <div class="container py-6 px-6">
          <p class="text is-size-5">
            Enter the title of your intreset and navigate to your project
          </p>
          <i class="fa-solid fa-circle-question"></i>
          <input type="text" placeholder="eg" class="input is-large" />
          <p>designed by Mehrdad Anvar</p>
        </div>
        <div class="container">
          <button class="button is-warning is-large">Sign Up</button>
        </div>
      </div>
      <div class="row-3 py-6">
        <div class="l">
          <i class="fa-solid fa-1 is-size-3 has-text-warning"></i>
          <br />
          <i class="fa-solid fa-users is-size-3 py-2"></i>
          <br />
          <h2 class="text has-text-weight-bold my-5 is-size-3">Setup an Account</h2>
          <p class="text">
            sign up for an account using your FDU instituion email address in minuts and hit the
            raod
          </p>
        </div>
        <div class="m">
          <i class="fa-solid fa-2 is-size-3 has-text-warning"></i>
          <br />
          <i class="fa-solid fa-marker is-size-3 py-2"></i>
          <br />
          <h2 class="text has-text-weight-bold my-5 is-size-3">Design and Draft your Case</h2>
          <p class="text">
            Either vring your own valuable ideas worth of working on or choose one of the
            exististing projects to contribute to. Review your content online in your borowser. No
            need for microsoft word or styling.
          </p>
        </div>
        <div class="r">
          <i class="fa-solid fa-3 is-size-3 has-text-warning"></i>
          <br />
          <i class="fa-solid fa-share is-size-3 py-2"></i>
          <br />
          <h2 class="text has-text-weight-bold my-5 is-size-3">Send your work to professors</h2>
          <p class="text">
            Upon completion have your manuscript sent to the professors waiting for your invaluable
            insights
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="title">
        <div class="has-size-3">Adminstrator home</div>
      </div>
      <h1 class="block has-background-success-lighter mb-6">
        <div>Here you can get a list of Users</div>
      </h1>
      <div class="container">
        <div class="box">
          <div class="table-container">
            <KeepAlive>
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
            </KeepAlive>
          </div>
          <div class="button is-primary" @click="getUsers">Get from Database</div>
        </div>
      </div>
    </section>
  </div>
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

<style scoped>
.head-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
.row-1 {
  display: grid;
  grid-template-columns: 3fr 4fr;
}
.row-2 {
  background-color: #dcdee3;
  border-radius: 3rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
}
.row-3 {
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-auto-flow: column;
  column-gap: 3rem;
}

.section {
  color: #001d40;
}
</style>
