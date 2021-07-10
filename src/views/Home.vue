<template>
  <section class="home">
    <h2>Hove view</h2>
  </section>

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
    // getMovies() {
    //   return this.$store.getters.getMovies;
    // },
  },
  created() {
    //   this.$store.dispatch("getMovies", {
    //     url1: 'https://api.themoviedb.org/3/movie/api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US',
    //     url2: 'https://api.themoviedb.org/3/movie/565?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US',
    //     url3: 'https://api.themoviedb.org/3/movie/425?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US',
    //     type: 'movie'
    //   });
  },
};
</script>

<style scoped>
ul {
  display: flex;
  /* justify-content: center;
    align-items: center; */
  list-style: none;
}
</style>
