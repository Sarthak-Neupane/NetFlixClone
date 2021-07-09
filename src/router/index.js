import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MOVIES from "../views/Movies.vue";
import TV from "../views/TV.vue";
import MYLIST from "../views/MyList.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'movies',
    component: MOVIES
  },
  {
    path: '/tv',
    name: 'tv',
    component: TV
  },
  {
    path: '/myList',
    name: 'mylist',
    component: MYLIST
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
