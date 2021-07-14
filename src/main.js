import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";

import BaseBackground from "./components/Base/BaseBackground.vue";
import BaseButton from "./components/Base/BaseButton.vue";
import BigBackground from "./components/Base/bigBackground.vue";
import BaseSpinner from "./components/Base/BaseSpinner.vue";
import BaseSwiper from "./components/Base/BaseSwiper.vue";
import BaseDialog from "./components/Base/BaseDialog.vue";

const firebaseConfig = {
  apiKey: "AIzaSyC82icMDSAeleMuNh3oJs-rH0dRDUb55JQ",
  authDomain: "netflixclonefirst.firebaseapp.com",
  databaseURL: "https://netflixclonefirst-default-rtdb.firebaseio.com",
  projectId: "netflixclonefirst",
  storageBucket: "netflixclonefirst.appspot.com",
  messagingSenderId: "865188090238",
  appId: "1:865188090238:web:c697bc7b0ef74c4c01e32f",
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.component("base-background", BaseBackground);
app.component("base-button", BaseButton);
app.component("big-background", BigBackground);
app.component("base-swiper", BaseSwiper);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.use(store);
app.use(router);

app.mount("#app");
