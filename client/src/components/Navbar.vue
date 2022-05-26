//unused file
<template>
  <nav class="navbar has-shadow is-white">
    <div class="navbar-brand">
      <img
        src="../src/assets/logo.jpg"
        alt=""
        class="image my-2 mx-2 is-64x64"
      />
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <!-- <router-link to="/register" class="navbar-item">Register</router-link> -->
      </div>
    </div>
    <router-view />
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>