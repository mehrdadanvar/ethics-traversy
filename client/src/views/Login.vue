<template>
  <section class="hero mt-2 pt-2">
    <div class="container">
      <form class="box" @submit.prevent="loginHandler" method="post">
        <div class="field">
          <label class="label">FDU pemail Adress</label>
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
        <div class="field"></div>
        <div class="submit">
          <button class="button is-primary is-large">Login</button>
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
        email: "",
        password: "",
      };
    },
  },
  methods: {
    loginHandler() {
      // email = this.email;
      // password = this.password;
      // console.log(email, password);
      axios
        .post("http://localhost:5000/api/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          // alert("hoora success you are loged in");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  box-shadow: 1px 1px 15px black;
}
</style>
