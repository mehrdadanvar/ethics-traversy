<template>
  <section class="section mt-2 pt-2">
    <div class="container">
      <div class="box">
        <h1 class="title is-size-4">Welcome to the registration Page</h1>
        <p class="text">Please go through the following form with your FDU email address</p>
        <article class="message is-danger">
          <div class="message-header">
            <p>registration Form Details</p>
          </div>
          <div class="message-content">
            <p>Please read this part with care</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tenetur repellat
              vero porro explicabo cum deleniti? Nobis obcaecati vero quis, aliquid provident
              facilis dolor temporibus? Ratione nihil porro id facilis.
            </p>
          </div>
        </article>
      </div>
    </div>

    <div class="container">
      <form class="box pr-6 mr-1 ml-1 mt-1" @submit.prevent="submitHandler" method="post">
        <h1 class="title is-size-4 mt-2 mb-6">Registration Form</h1>
        <hr />
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
        <hr />
        <div class="submit">
          <button class="button is-primary pr-3 pl-3 mr-6 ml-6">Create an Account</button>
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
  components: {},
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

<style scoped>
.section {
  display: grid;
  grid-template-columns: 2fr 4fr;
}
.box {
  border-radius: 2rem;
  border-width: 1px;
  box-shadow: 1px 1px 20px rgb(62, 142, 155);
  border-style: solid;
  border-color: rgb(22, 26, 26);
}
</style>
