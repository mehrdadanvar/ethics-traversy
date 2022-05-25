import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require("../src/assets/main.scss");

createApp(App).use(store).use(router).mount("#app");
//'Droid Sans Mono', 'monospace', monospace
