<template>
  <section class="movie">
    <div class="spinner" v-if="isLoading"><base-spinner></base-spinner></div>
    <big-background
      v-if="hasMovies"
      :background="
        'https://image.tmdb.org/t/p/original' + discover[0].backdrop_path
      "
      :title="discover[0].title"
      :desc="discover[0].overview"
    >
    </big-background>

    <ul>
      <swiper :slides-per-view="6" navigation :scrollbar="{ draggable: true }">
        <swiper-slide v-for="image in discover" :key="image">
          <movie-list :poster="image.backdrop_path" :id="image.id"></movie-list>
        </swiper-slide>
      </swiper>
    </ul>
  </section>
</template>

<script>
import MovieList from "../components/MovieList.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Scrollbar, A11y, Zoom } from "swiper";
SwiperCore.use([Navigation, Scrollbar, A11y, Zoom]);
export default {
  data() {
    return {
      isLoading: false,
      Datas: [this.discover, this.upcoming],
    };
  },

  components: {
    MovieList,
    Swiper,
    SwiperSlide,
  },

  methods: {
    async getData() {
      this.isLoading = true;
      await this.$store.dispatch("getMovies", {
        discover:
          "https://api.themoviedb.org/3/discover/movie?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
        upcoming:
          "https://api.themoviedb.org/3/movie/upcoming?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        popular:
          "https://api.themoviedb.org/3/movie/popular?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        topRated:
          "https://api.themoviedb.org/3/movie/top_rated?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        inTheatres:
          "https://api.themoviedb.org/3/movie/now_playing?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        trending:
          "https://api.themoviedb.org/3/trending/movie/week?api_key=600356b3ea6a55171e5421f900b63ab9",
        type: "movie",
      });
      this.isLoading = false;
    },
  },
  created() {
    this.getData();
  },
  computed: {
    discover() {
      return this.$store.getters.getMoviesDiscover;
    },
    upcoming() {
      return this.$store.getters.getMoviesUpcoming;
    },
    hasMovies() {
      return !this.isLoading && this.$store.getters.getMoviesDiscover;
    },
  },
};
</script>

<style scoped>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
