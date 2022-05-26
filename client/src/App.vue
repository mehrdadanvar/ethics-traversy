<template>
  <!-- <HomeView /> -->
  <!-- <Navbar /> -->
  <Header />
  <Navbar />
</template>

<script>
// const burgerIcon = document.querySelector("#burger");
// const navbarMenu = document.querySelector("#menu");
// burgerIcon.addEventListener("click", () => {
//   navbarMenu.classlist.toggle("is-active");
// });
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Header,
    Navbar,
  },
};
</script>

<style lang="scss">
body {
  // background-color: rgba(237, 232, 213, 0.947);
  // background-image: url("./assets/back.jpg");
}
.logo {
  max-width: 100px;
}
</style>
