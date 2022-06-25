<template>
  <div class="section">
    <h1 class="title">Draft Your Case</h1>
    <hr />
    <div class="box">
      <form action="">
        <label for="">Article Title</label>
        <textarea
          class="textarea is-primary is-large is-loading"
          placeholder="type your case"
          row="20"
          v-model="item"
        ></textarea>
        <input type="text" />
        <div class="text">
          <p class="text">{{ item }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AB",
  data() {
    return {
      item: "",
    };
  },
};
</script>

<style scoped>
.text {
  color: brown;
  justify-content: center;
}
.section {
  justify-content: center;
  border-style: groove;
}
</style>
