<template>
  <div class="sign up">
    <h2>welcome to the Sign Up area</h2>
    <hr />
    <div class="field">
      <div class="control">
        <label>name : </label>
        <input
          class="control has-icon-left"
          type="text"
          name="name"
          placeholder="type you name"
          v-model="first"
        />
        <label>last name : </label>
        <input type="test" name="last name" title="name" v-model="last" />
        <label>email adress: </label>
        <input
          type="email"
          name="email"
          placeholder="sample@fdu.edu"
          v-model="email"
        />
      </div>
      <button class="button is-danger">press me</button>
      <hr />
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <!-- <input type="color" name="" id="">
      <input type="date" name="" id="">
      <input type="email" name="" id="">
      <input type="file" name="" id="">
      <input type="week" name="" id="">
      <input type="tel" name="" id="">
      <input type="url" name="" id=""> -->
    </div>
    <!-- <div>
      <p>this was your name:{{ first }}</p>
      <p>this was your last name:{{ last }}</p>
      <p>this was your email:{{ email }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: "",
      last: "",
      email: "",
    };
  },
};
</script>

<style>
body {
  background-color: rgb(110, 92, 30);
  margin: 0;
}
</style>
