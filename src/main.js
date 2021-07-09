import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BasePoster from "./components/Base/BasePoster.vue";
import BaseButton from "./components/Base/BaseButton.vue";
import BigBackground from "./components/bigBackground.vue";

const app = createApp(App);

app.component("base-poster", BasePoster);
app.component("base-button", BaseButton);
app.component("big-background", BigBackground);

app.use(store);
app.use(router);

app.mount("#app");
