<template>
  <section class="section mt-2 pt-2">
    <div class="container">
      <div class="box">
        <h1 class="title is-size-4 my-4">Welcome to the registration Page</h1>

        <article class="message is-warning">
          <div class="message-header">
            <p>registration Form Details</p>
          </div>
          <div class="message-content">
            <li class="text">Please read this part with care</li>
            <li class="text">Please go through the following form with your FDU email address</li>
            <li class="text">
              Providing your First Name and Last Name will significantly assisst un in tracking your
              contribution to the project and facilitates furthur communication between the authors
            </li>
            <li>
              the user name could be an arbitrary combination of characters, preferably a memorable
              piece of text such as first.last name
            </li>
            <li class="text">please use your FDU email address for operating this repository</li>
            <li class="text">
              Conidering a strong and complicated password which is longer than 5 characters, will
              ensure the security of this portal and your information
            </li>
          </div>
        </article>
      </div>
    </div>

    <div class="box">
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
  grid-template-columns: 3fr 4fr;
  column-gap: 10px;
}
.box {
  border-radius: 2rem;
  border-width: 1px;
  box-shadow: 1px 1px 20px rgb(62, 142, 155);
  border-style: solid;
  border-color: rgb(22, 26, 26);
}
</style>
