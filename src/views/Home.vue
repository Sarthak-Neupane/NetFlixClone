<template>
  <section class="home">hello</section>

  <!-- <swiper
      :slides-per-view="7"
      :space-between="0"
      navigation
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="image in getMovies" :key="image">
        <movie-list :poster="image.poster_path"></movie-list>
      </swiper-slide>
    </swiper> -->
</template>
<script>
// import MovieList from "../components/MovieList.vue";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/swiper-bundle.css";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
  data() {
    return {
      movie: [],
    };
  },
  components: {
    // MovieList,
    // Swiper,
    // SwiperSlide,
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.$store.dispatch("getList");
  },
};
</script>

<style scoped>
section {
  background: black;
}
ul {
  display: flex;
  /* justify-content: center;
    align-items: center; */
  list-style: none;
}
</style>
