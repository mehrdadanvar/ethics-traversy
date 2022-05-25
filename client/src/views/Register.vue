<template>
  <section class="hero">
    <div class="container">
      <form class="box pr-6 mr-6" @submit.prevent="submitHandler" method="post">
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
        <div class="field my-5">
          <label class="label is-size-6">Username</label>
          <div class="control">
            <input
              type="text"
              class="input is-size-1"
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
              class="input py-4 my-4 px-6"
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
              placeholder="******** should be longer than 5 characters"
              name="password2"
              v-model="password2"
            />
          </div>
        </div>
        <div class="field" v-if="passwordCheckHandler">{{}}</div>
        <div class="submit">
          <button class="button is-primary py-1 px-3 my-">
            Create an Account
          </button>
        </div>
      </form>
    </div>
    <div>
      <div>
        <p>
          already have an account?
          <router-link to="/Login">login here</router-link>
        </p>
      </div>
    </div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <div class="is-size-1">hello world</div>
    <section class="section">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eligendi
      totam soluta numquam ducimus odit modi debitis rerum dolore repellendus
      ipsum minus facilis quasi quos, perferendis optio dolorum labore commodi
      eos, quia culpa sapiente unde sequi. Aperiam consectetur iusto, nostrum
      magnam harum voluptas nesciunt consequatur doloremque repudiandae. Soluta
      nobis mollitia harum vel odit dolor atque fugiat et architecto nam
      molestiae impedit sapiente, ratione eaque dicta rem. Quos, aperiam
      consequuntur quam qui voluptatem nesciunt aut hic reprehenderit tempore
      earum impedit numquam repellat maiores quod voluptatum magnam incidunt
      aliquam fugit unde cumque eos iusto ipsa? Eligendi corporis optio dolor
      ipsam eveniet a.
    </section>
    <div class="container">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
      alias hic? Fugiat, quibusdam consequatur. Sequi officiis consectetur ipsum
      dolore non. Doloribus, eveniet? Facere nostrum doloremque dolor quaerat
      odit amet dolorum.
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
  background-color: blue;
}
</style>
