import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import HOME from "../views/Home.vue";
// import MOVIES from "../views/Movies.vue";
// import MoviesDetail from "../views/MovieDetails.vue";
// import TvDetails from "../views/TvDetails.vue";
// import TV from "../views/TV.vue";
// import Search from "../views/Search.vue";
// import MYLIST from "../views/MyList.vue";
// import Video from "../views/Video.vue";
import SignUp from "../views/SignUp.vue";
import login from "../views/login.vue";

const MOVIES = defineAsyncComponent(() => import("../views/Movies.vue"));
const TvDetails = defineAsyncComponent(() => import("../views/TvDetails.vue"));
const MoviesDetail = defineAsyncComponent(() =>
  import("../views/MovieDetails.vue")
);
const TV = defineAsyncComponent(() => import("../views/TV.vue"));
const Search = defineAsyncComponent(() => import("../views/Search.vue"));
const Video = defineAsyncComponent(() => import("../views/Video.vue"));
const MYLIST = defineAsyncComponent(() => import("../views/MyList.vue"));

import firebase from "firebase/app";
import "firebase/auth";

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/home",
    name: "home",
    component: HOME,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/movie",
    name: "movies",
    component: MOVIES,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/movie/:id",
    name: "moviesId",
    component: MoviesDetail,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tv",
    name: "tv",
    component: TV,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tv/:id",
    name: "tvId",
    component: TvDetails,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/search",
    name: "search",
    component: Search,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/myList",
    name: "mylist",
    component: MYLIST,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/video",
    name: "video",
    component: Video,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "signUp",
    component: SignUp,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      hideNavbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
