<template>
  <section class="movie">
    <div class="spinner" v-if="isLoading"><base-spinner></base-spinner></div>
    <big-background
      v-if="hasMovies"
      :background="discover.datas[getRandom].backdrop_path"
      :poster="discover.datas[getRandom].poster_path"
      :title="discover.datas[getRandom].title"
      :desc="discover.datas[getRandom].overview"
      :id="discover.datas[getRandom].id"
    >
    </big-background>
    <div class="container">
      <base-swiper v-for="items in Datas" :key="items.name">
        <template #title>{{ items.name }}</template>
        <template #swiper>
          <swiper
            :slides-per-view="dimensions"
            :space-between="10"
            navigation
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide v-for="movie in items.datas" :key="movie">
              <movie-list
                :poster="movie.poster_path"
                :id="movie.id"
                :name="movie.title"
                :genres="movie.genre_ids"
                :allGenre="Genres"
              ></movie-list>
            </swiper-slide>
          </swiper>
        </template>
      </base-swiper>
    </div>
  </section>
</template>

<script>
import MovieList from "../components/MovieList.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
export default {
  data() {
    return {
      isLoading: false,
      Datas: [],
      Genres: [],
      hover: false,
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
      this.storingDatas();
    },
    storingDatas() {
      this.Datas.push(this.discover);
      this.Datas.push(this.upcoming);
      this.Datas.push(this.popular);
      this.Datas.push(this.topRated);
      this.Datas.push(this.theatres);
      this.Datas.push(this.trending);
    },
    async getGenres() {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US",
        {
          headers: {
            "content-type": "application/json;charset=utf-8",
            authorization:
              "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
          },
        }
      );
      const responseData = await response.json();
      this.Genres.push(responseData.genres);
      // console.log(responseData.genres);
    },
  },
  created() {
    this.getData();
    this.getGenres();
    this.$store.dispatch("getList");
  },
  computed: {
    dimensions() {
      if (window.innerWidth < 500) {
        return 2;
      } else if (window.innerWidth < 768) {
        return 4;
      } else if (window.innerWidth < 1450) {
        return 6;
      } else if (window.innerWidth < 1900) {
        return 9;
      } else {
        return 10;
      }
    },
    discover() {
      return this.$store.getters.getMoviesDiscover;
    },
    upcoming() {
      return this.$store.getters.getMoviesUpcoming;
    },
    popular() {
      return this.$store.getters.getMoviesPopularity;
    },
    topRated() {
      return this.$store.getters.getMoviesToprated;
    },
    theatres() {
      return this.$store.getters.getMoviesinTheatres;
    },
    trending() {
      return this.$store.getters.getMoviesTrending;
    },
    hasMovies() {
      return !this.isLoading && this.$store.getters.getMoviesDiscover.datas;
    },
    getRandom() {
      return Math.floor(Math.random() * this.discover.datas.length);
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
.hello {
  height: 100vh;
}
.container {
  padding: 0rem 1rem;
}

@media (max-width: 768px) {
  .container {
    margin: 0rem 0;
  }
}
</style>
