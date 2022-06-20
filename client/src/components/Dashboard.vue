<template>
  <section class="section">
    <div class="right">
      <h1>this is the right side</h1>
    </div>
    <div class="left">
      <h1>this is the left side</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
.section {
  display: grid;
  background-color: bisque;
  grid-template-columns: 1fr 4fr;
}
</style>
