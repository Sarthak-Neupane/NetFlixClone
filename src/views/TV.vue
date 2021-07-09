<template>
  <section class="tv">
    <h2>this is the tv page</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movie: [],
    };
  },
  components: {},
  computed: {
    getMovies() {
      return this.$store.getters.getMovies;
    },
  },
  created() {
    this.$store.dispatch("getMovies", 
    {
       url1: 'https://api.themoviedb.org/3/genre/tv/list?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US',
       url2: 'https://api.themoviedb.org/3/discover/movie?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
       url3: 'https://api.themoviedb.org/3/genre/movie/list?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US',
       type: 'tv'
    });
  },
};
</script>
