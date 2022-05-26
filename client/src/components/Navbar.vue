<template>
  <nav class="navbar has-shadow is-white">
    <div class="navbar-brand">
      <img src="../assets/logo.jpg" alt="" class="image my-2 mx-2 is-128x128" />
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/register" class="navbar-item">Register</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>