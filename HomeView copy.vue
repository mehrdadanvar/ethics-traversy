<template>
  <nav class="navbar has-shadow is-white">
    <div class="navbar-brand">
      <img src="../assets/logo.jpg" alt="" class="image my-2 mx-2 is-128x128" />
      <a class="navbar-burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <ul class="navbar-menu" id="menu" v-show="!mobile">
      <div class="navbar-start">
        <li>
          <router-link :to="{ name: 'home' }" class="navbar-item"
            >Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'about' }" class="navbar-item"
            >About</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'register' }" class="navbar-item"
            >Register</router-link
          >
        </li>
      </div>
    </ul>
    <div class="icon">
      <img
        class="image is-64x64"
        src="../assets/logo.jpg"
        @click="toggleMobileView"
        :class="{ 'icon-active': mobileNav }"
      />
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
