<template>
  <section class="hero">
    <div class="container">
      <form class="box" @submit.prevent="loginHandler" method="post">
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
        <div class="field" v-if="passwordCheckHandler">{{}}</div>
        <div class="submit">
          <button class="button is-primary">Login</button>
        </div>
      </form>
    </div>
    <div>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid
        dolores expedita facere laudantium optio perspiciatis repellendus
        delectus tempora dolor, laboriosam ipsa? Voluptatibus quidem quo nisi
        excepturi accusantium, ea obcaecati?
      </section>
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
      axios
        .post("http://localhost:5000/api/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          alert("hoora success you are loged in");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>