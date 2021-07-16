<template>
  <div class="spinner" v-if="isLoading"><base-spinner></base-spinner></div>
  <section class="home" v-else>
    <big-background
      v-if="hasMovies"
      :background="getVoteHigh.datas[getRandom].backdrop_path"
      :poster="getVoteHigh.datas[getRandom].poster_path"
      :title="getVoteHigh.datas[getRandom].title"
      :desc="getVoteHigh.datas[getRandom].overview"
      :id="getVoteHigh.datas[getRandom].id"
    >
    </big-background>

    <div class="theList" v-if="getStoredMovies">
      <base-swiper>
        <template #title>My List</template>
        <template #swiper>
          <swiper
            :slides-per-view="dimensions"
            :space-between="10"
            navigation
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide v-for="movie in getStoredMovies" :key="movie">
              <movie-list
                :poster="movie.poster"
                :id="movie.id"
                :name="movie.title"
                :posterSize="185"
              ></movie-list>
            </swiper-slide>
          </swiper>
        </template>
      </base-swiper>
    </div>
    <div class="movies">
      <base-swiper v-for="items in datasMovie" :key="items.name">
        <template #title>{{ items.name }}</template>
        <template #swiper>
          <swiper
            :slides-per-view="dimensionsTwo"
            :space-between="10"
            navigation
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide v-for="movie in items.datas" :key="movie.id">
              <movie-list
                :poster="movie.poster_path"
                :id="movie.id"
                :name="movie.title"
                :genres="movie.genre_ids"
                :allGenre="Genres"
                :posterSize="154"
              ></movie-list>
            </swiper-slide>
          </swiper>
        </template>
      </base-swiper>
    </div>
    <!-- <div class="tvs">
      <base-swiper v-for="items in datasTv" :key="items.name">
        <template #title>{{ items.name }}</template>
        <template #swiper>
          <swiper
            :slides-per-view="dimensionsTwo"
            :space-between="10"
            navigation
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide v-for="tv in items.datas" :key="tv">
              <tv-list
                :poster="tv.poster_path"
                :id="tv.id"
                :name="tv.name"
              ></tv-list>
            </swiper-slide>
          </swiper>
        </template>
      </base-swiper>
    </div> -->
  </section>
</template>
<script>
import MovieList from "../components/MovieList.vue";
// import TvList from "../components/MovieList.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
export default {
  data() {
    return {
      isLoading: false,
      datasMovie: [],
      datasTv: [],
      Genres: [],
    };
  },
  components: {
    MovieList,
    Swiper,
    SwiperSlide,
    // TvList
  },
  created() {
    this.isLoading = true;
    this.callAllfunction();
    this.getGenres();
  },
  computed: {
    getVoteHigh() {
      return this.$store.getters.getHomeVoteHigh;
    },
    VoteHighSecond() {
      return this.$store.getters.VoteHighSecond;
    },
    getHomeTopRatedMovie() {
      return this.$store.getters.getHomeTopRatedMovie;
    },
    getHometopRatedTv() {
      return this.$store.getters.getHometopRatedTv;
    },
    getStoredMovies() {
      return this.$store.getters.getStoredMovies;
    },
    hasMovies() {
      return !this.isLoading && this.getVoteHigh.datas;
    },
    getRandom() {
      return Math.floor(Math.random() * this.getVoteHigh.datas.length);
    },
    dimensions() {
      if (window.innerWidth < 500) {
        return 2;
      } else if (window.innerWidth < 768) {
        return 3;
      } else if (window.innerWidth < 1450) {
        return 5;
      } else if (window.innerWidth < 1900) {
        return 7;
      } else {
        return 9;
      }
    },
    dimensionsTwo() {
      if (window.innerWidth < 500) {
        return 2;
      } else if (window.innerWidth < 768) {
        return 4;
      } else if (window.innerWidth < 1450) {
        return 6;
      } else if (window.innerWidth < 1900) {
        return 9;
      } else {
        return 11;
      }
    },
  },
  methods: {
    async callAllfunction() {
      this.loading = true;
      await this.$store.dispatch("getList");
      await this.getData();
      this.datasMovie.push(this.getVoteHigh);
      this.datasMovie.push(this.VoteHighSecond);
      this.datasMovie.push(this.getHomeTopRatedMovie);
      this.datasTv.push(this.getHomeTopRatedTv);
      this.isLoading = false;
    },
    async getData() {
      await this.$store.dispatch("getHome", {
        Votehigh:
          "https://api.themoviedb.org/3/discover/movie?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&sort_by=vote_count.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate",
        VotehighSecond:
          "https://api.themoviedb.org/3/discover/movie?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&sort_by=vote_count.desc&include_adult=true&include_video=false&page=2&with_watch_monetization_types=flatrate",
        topRated:
          "https://api.themoviedb.org/3/movie/top_rated?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        topRatedTv:
          "https://api.themoviedb.org/3/tv/top_rated?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
      });
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
};
</script>

<style scoped>
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
}
.theList {
  padding: 1rem;
}
</style>
