<template>
  <section class="tv">
    <div class="spinner" v-if="isLoading"><base-spinner></base-spinner></div>
    <big-background
      v-if="hasTv"
      :background="
        'https://image.tmdb.org/t/p/original' +
        popular.datas[getRandom].backdrop_path
      "
      :title="popular.datas[getRandom].name"
      :desc="popular.datas[getRandom].overview"
      :id="popular.datas[getRandom].id"
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
            <swiper-slide v-for="tv in items.datas" :key="tv">
              <tv-list
                :poster="tv.poster_path"
                :id="tv.id"
                :name="tv.name"
                :genres="tv.genre_ids"
                :allGenre="Genres"
              ></tv-list>
            </swiper-slide>
          </swiper>
        </template>
      </base-swiper>
    </div>
  </section>
</template>

<script>
import TvList from "../components/TvList.vue";
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
    };
  },
  components: {
    TvList,
    Swiper,
    SwiperSlide,
  },

  methods: {
    async getData() {
      this.isLoading = true;
      await this.$store.dispatch("getTV", {
        airingToday:
          "https://api.themoviedb.org/3/tv/airing_today?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        onTheAir:
          "https://api.themoviedb.org/3/tv/on_the_air?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        popular:
          "https://api.themoviedb.org/3/tv/popular?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        topRated:
          "https://api.themoviedb.org/3/tv/top_rated?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1",
        originals: `https://api.themoviedb.org/3/discover/tv?api_key=600356b3ea6a55171e5421f900b63ab9&with_networks=213&sort_by=popularity.desc&language=en_US`,
      });
      this.isLoading = false;
      this.storingDatas();
    },
    storingDatas() {
      this.Datas.push(this.airingToday);
      this.Datas.push(this.onTheAir);
      this.Datas.push(this.popular);
      this.Datas.push(this.topRated);
      this.Datas.unshift(this.originals);
      // console.log(this.Datas);
    },
    async getGenres() {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US",
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
    },
  },
  created() {
    this.getData();
    this.getGenres();
  },
  computed: {
    dimensions() {
      if (window.innerWidth < 400) {
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
    airingToday() {
      return this.$store.getters.getTvAiringToday;
    },
    onTheAir() {
      return this.$store.getters.getTvAiring;
    },
    popular() {
      return this.$store.getters.getTvPopular;
    },
    topRated() {
      return this.$store.getters.getTvTopRated;
    },
    originals() {
      return this.$store.getters.getTvOriginal;
    },
    hasTv() {
      return !this.isLoading && this.$store.getters.getTvPopular.datas;
    },
    getRandom() {
      return Math.floor(Math.random() * this.popular.datas.length);
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
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .container {
    margin: 0rem 0;
  }
}
</style>
