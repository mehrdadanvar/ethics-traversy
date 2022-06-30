<template>
  <section class="hero">
    <div class="box">
      <h1 class="title">Thank You For Registering with Negothics</h1>
      <hr />
      <p class="tex">You need to activate your account by checking your inbox</p>
      <p class="text">An email wass sent to your inbox</p>
      <form class="form" @submit.prevent="activateHandler" method="post">
        <label class="lable">Email Address</label>
        <input type="text" class="email is-large" v-model="email" />
        <label class="lable">Activation Code</label>
        <input type="text" class="activation is-large" v-model="secret" />
        <hr />
        <button class="button is-primary">Activate My Account</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Activator",
  data() {
    return {
      email: "",
      secret: "",
    };
  },
  methods: {
    activateHandler() {
      console.log(this.email, this.secret);

      axios
        .post("http://localhost:5000/api/users/activate", {
          email: this.email,
          secret: this.secret,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.box {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 20rem;
  max-height: 500px;
  width: 70rem;
  justify-content: center;
}
</style>
