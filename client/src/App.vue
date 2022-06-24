<template>
  <!-- <HomeView /> -->
  <!-- <Navbar /> -->
  <Navbar />
  <router-view />
</template>

<script>
// const burgerIcon = document.querySelector("#burger");
// const navbarMenu = document.querySelector("#menu");
// burgerIcon.addEventListener("click", () => {
//   navbarMenu.classlist.toggle("is-active");
// })
import Navbar from "./components/Navbar.vue";
// import Case from "./views/Case.vue";
export default {
  name: "App",
  components: {
    Navbar,
    // Case,
  },
};
</script>

<style lang="scss">
.logo {
  max-width: 100px;
}
</style>
