<template>
  <section class="section-1 mt-2 pt-2">
    <div class="packet">
      <!-- <div class="container">
        <h1 class="title is-size-4 my-4">Welcome to the registration Page</h1>
        <article class="text is-warning">
          <div class="message-header">
            <p>registration Form Details</p>
          </div>
          <div class="message-content">
            <li class="text">Please read this part with care</li>
            <li class="text">
              Please go through the following form with your FDU email address
            </li>
            <li class="text">
              Providing your First Name and Last Name will significantly assisst un in
              tracking your contribution to the project and facilitates furthur
              communication between the authors
            </li>
            <li>
              the user name could be an arbitrary combination of characters, preferably a
              memorable piece of text such as first.last name
            </li>
            <li class="text">
              please use your FDU email address for operating this repository
            </li>
            <li class="text">
              Conidering a strong and complicated password which is longer than 5
              characters, will ensure the security of this portal and your information
            </li>
          </div>
        </article>
      </div> -->
      <div class="container">
        <div class="container-content">
          <h1 class="title">Welcome to Negothics</h1>
          <button class="button has-color-white">Sing Up</button>
        </div>
      </div>
    </div>
    <form
      class="packet pr-6 mr-1 ml-1 mt-1"
      @submit.prevent="submitHandler"
      method="post"
    >
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
        <label class="label">Confirm Password</label>
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

      <hr />
      <div class="submit">
        <button class="button is-primary pr-3 pl-3 mr-6 ml-6">Create an Account</button>
      </div>
      <div class="pt-6 pb-2">
        <p>
          already have an account?
          <router-link to="/Login" class="is-underlined">login here</router-link>
        </p>
      </div>
    </form>
    <div class="section" v-show="true">
      <div class="field" v-show="shower">
        <p class="text">
          An emial has been sent to your inbox containing an activation code.
        </p>
        <p>copy the and paste the code into the box below</p>
        <label class="lable">Activation Code</label>
        <input
          class="input"
          type="numeric"
          placeholder="X _ X _ X _ X _ X _"
          name="ActCode"
          v-model="ActCode"
        />
        <button class="button is-primary">Activate</button>
      </div>
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
      email: "",
      password: "",
      password2: "",
      shower: true,
      register_data: undefined,
      activation_code: "",
    };
  },
  methods: {
    submitHandler() {
      if (this.password !== this.password2) {
        alert("Password Missmatch! Try again");
      } else {
        // const activation_code = Math.random().toString().substr(2, 6);
        axios
          .post("http://localhost:5000/api/users/", {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            activation_code: this.activation_code,
          })
          .then((response) => {
            console.log(response);
            this.$router.push("/activate");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // activationHandler(){
    //   if(){

    //   }
    // }
  },
};
</script>

<style scoped>
.section-1 {
  display: grid;
  grid-template-columns: 3fr 3fr;
}
.box {
  display: flex;
  align-content: center;
  border-radius: 2rem;
  border-width: 1px;
  box-shadow: 1px 1px 20px rgb(62, 142, 155);
  border-style: solid;
  border-color: rgb(22, 26, 26);
}
.container {
  background-color: rgb(44, 109, 109);
  color: white;
  height: 1000px;

  /* box-sizing: border-box; */
}
.container-content {
  display: grid;
  flex-direction: column;
  align-items: center;
  flex-grow: 2;
}
.section {
  margin: 2rem 2rem 2rem 2rem;
  justify-content: center;
  width: 500px;
}
</style>
