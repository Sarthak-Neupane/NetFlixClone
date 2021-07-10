import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BasePoster from "./components/Base/BasePoster.vue";
import BaseButton from "./components/Base/BaseButton.vue";
import BigBackground from "./components/Base/bigBackground.vue";
import BaseSpinner from "./components/Base/BaseSpinner.vue";
import BaseSwiper from "./components/Base/BaseSwiper.vue";

const app = createApp(App).use(router);

app.component("base-poster", BasePoster);
app.component("base-button", BaseButton);
app.component("big-background", BigBackground);
app.component("base-swiper", BaseSwiper);
app.component("base-spinner", BaseSpinner);

app.use(store);
app.use(router);

app.mount("#app");
