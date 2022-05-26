<template>
  <section class="hero mt-2 pt-2">
    <div class="container">
      <form
        class="box pr-6 mr-1 ml-1 mt-1"
        @submit.prevent="submitHandler"
        method="post"
      >
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="e.g Barrack"
              name="firstname"
              v-model="firstname"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="e.g Obamma"
              name="lastname"
              v-model="lastname"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="e.g barrak.obamma"
              name="username"
              v-model="username"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">FDU Email Adress</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="person@student.fdu.edu"
              name="email"
              v-model="email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="******** should be longer than 5 characters"
              name="password"
              v-model="password"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Confirm your Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder=">5 characters"
              name="password2"
              v-model="password2"
            />
          </div>
        </div>
        <div class="field" v-if="passwordCheckHandler">{{}}</div>
        <div class="submit">
          <button class="button is-primary pr-3 pl-3 mr-6 ml-6">
            Create an Account
          </button>
        </div>
        <div class="pt-6 pb-2">
          <p>
            already have an account?
            <router-link to="/Login" class="">login here</router-link>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  components: {
    data: () => {
      return {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        password2: "",
      };
    },
  },
  methods: {
    submitHandler() {
      axios
        .post("http://localhost:5000/api/users/", {
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          alert("hoora success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  background-color: rgb(208, 208, 227);
}
</style>
