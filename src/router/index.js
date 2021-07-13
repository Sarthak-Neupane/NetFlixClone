import { createRouter, createWebHistory } from "vue-router";
import HOME from "../views/Home.vue";
import MOVIES from "../views/Movies.vue";
import MoviesDetail from "../views/MovieDetails.vue";
import TvDetails from "../views/TvDetails.vue";
import TV from "../views/TV.vue";
import Search from "../views/Search.vue";
import MYLIST from "../views/MyList.vue";
import Video from "../views/Video.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HOME,
  },
  {
    path: "/movie",
    name: "movies",
    component: MOVIES,
  },
  {
    path: "/movie/:id",
    name: "moviesId",
    component: MoviesDetail,
    props: true,
  },
  {
    path: "/tv",
    name: "tv",
    component: TV,
  },
  {
    path: "/tv/:id",
    name: "tvId",
    component: TvDetails,
    props: true,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/myList",
    name: "mylist",
    component: MYLIST,
  },
  {
    path: "/video",
    name: "video",
    component: Video,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
