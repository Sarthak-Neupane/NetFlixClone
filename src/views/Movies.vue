<template>
  <div>
    <big-background
      :background="
        'https://image.tmdb.org/t/p/original' +
        getMovies.backdropPhoto[randomNumber]
      "
      :title="getMovies.title[randomNumber]"
      :desc="getMovies.description[randomNumber]"
    >
    </big-background>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getMovies() {
      const info = {
        id: [],
        title: [],
        backdropPhoto: [],
        description: [],
        popularity: [],
        posterPhoto: [],
      };
      this.$store.getters.getMovies.forEach((data) => {
        data.results.forEach((element) => {
          info.id.push(element.id);
          info.title.push(element.title);
          info.backdropPhoto.push(element.backdrop_path);
          info.description.push(element.overview);
          info.popularity.push(element.popularity);
          info.posterPhoto.push(element.poster_path);
        });
      });
      // console.log(
      //   info.title,
      //   info.backdropPhoto,
      //   info.description,
      //   info.popularity,
      //   info.posterPhoto
      // );
      return info;
    },
    randomNumber() {
      return Math.floor(Math.random() * this.getMovies.backdropPhoto.length);
    },
  },
  created() {
    this.$store.dispatch("getMovies", {
      url1: "https://api.themoviedb.org/3/discover/movie?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
      url2: "https://api.themoviedb.org/3/discover/movie?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
      url3: "https://api.themoviedb.org/3/discover/movie?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
      type: "movie",
    });
  },
};
</script>

<style scoped></style>
