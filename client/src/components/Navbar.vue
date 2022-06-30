<template>
  <nav class="navbar has-shadow is-success">
    <div class="navbar-brand">
      <img src="../assets/bitmap.svg" alt="" class="image mx-2 is-96x96" />
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/case" class="navbar-item">cases</router-link>
        <router-link to="/dashboard" class="navbar-item">dashboard</router-link>
        <router-link to="/articlebuilder" class="navbar-item"
          >Post an Article</router-link
        >
      </div>
      <div class="navbar-end">
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/register" class="navbar-item">Register</router-link>
        <!-- <router-link to="/activate" class="navbar-item">activate</router-link> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
