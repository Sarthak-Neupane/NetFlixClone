<template>
  <section class="movie">
    <big-background :background="url" :title="title" :desc="des">
    </big-background>
  </section>
</template>

<script>
export default {
  data() {
    return {
      url: "../assets/casual.jpg",
      title: "fakeflix",
      des: "fake",
    };
  },

  watch: {
    url(newData) {
      this.url = newData;
    },
    title(newData) {
      this.title = newData;
    },
    des(newData) {
      this.des = newData;
    },
  },

  methods: {
    setInfo() {
      setTimeout(() => {
        this.url =
          "https://image.tmdb.org/t/p/original" +
          this.$store.getters.getMoviesDiscover[0].backdrop_path;
        this.title = this.$store.getters.getMoviesDiscover[0].title;
        this.des = this.$store.getters.getMoviesDiscover[0].overview;
        console.log(this.url, this.title, this.des);
      }, 500);
    },

    getData() {
      this.$store.dispatch("getMovies", {
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
      this.setInfo();
    },
  },
  created() {
    this.getData();
  },
  // mounted() {
  //   this.setInfo();
  // },
  computed: {
    discover() {
      return this.$store.getters.getMoviesDiscover;
    },
    upcoming() {
      return this.$store.getters.getMoviesUpcoming;
    },
    OneMovie() {
      return this.$store.getters.getOneMovie;
    },
  },
};
</script>

<style scoped></style>
