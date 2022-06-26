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
    <div class="container">
      <div class="box-1">
        <div class="left">
          <img
            src="../assets/distributor-logo-arcolinux.svg"
            alt=""
            class="image is-128x128"
          />
        </div>
        <div class="right">
          <h2 class="title is-small mt-2">a title</h2>
          <p class="role">Doctor</p>
          <p class="body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, officiis.
            Voluptates libero sed aliquid tempora itaque animi quo assumenda harum!
          </p>
        </div>
      </div>
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
* {
  box-sizing: border-box;
}
.text {
  color: brown;
  justify-content: center;
}
.section {
  justify-content: center;
  border-style: groove;
}
.box-1 {
  box-shadow: 0 0 10px rgb(155, 150, 155);
  width: 50%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 249, 215);
  color: white;
  border-radius: 1rem;
  text-align: center;
  padding: 2em;
  height: 30%;
  max-height: auto;
  align-items: center;
}
.box-1,
left {
  color: black;
}
@media (min-width: 700px) {
  .box-1 {
    flex-direction: row;
  }
  .left {
    margin-right: 10px;
  }
  .right {
    justify-content: center;
    margin-left: 2rem;
  }
}
</style>
