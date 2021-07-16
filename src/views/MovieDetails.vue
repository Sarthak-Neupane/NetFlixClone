<template>
  <div class="spinner" v-if="isLoading"><base-spinner></base-spinner></div>
  <section v-else>
    <big-background
      :background="'https://image.tmdb.org/t/p/original' + data.backdrop_path"
      :title="data.title"
      :desc="data.overview"
      :id="data.id"
      :genres="genreName"
      :releaseDate="data.release_date"
      :time="data.runtime"
      :adult="data.adult"
      :poster="data.poster_path"
      :spokenLang="spoken"
    >
    </big-background>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      isLoading: false,
      data: null,
      similar: null,
      genreName: [],
      spoken: []
    };
  },
  methods: {
    async getData() {
      this.isLoading = true;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US`,
        {
          headers: {
            "content-type": "application/json;charset=utf-8",
            authorization:
              "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
          },
        }
      );
      const dataResponse = await response.json();
      // console.log(dataResponse)
      this.data = dataResponse;
      dataResponse.genres.forEach((element) => {
        this.genreName.push(element.name);
      });
      dataResponse.spoken_languages.forEach((element) => {
        this.spoken.push(element.name);
      });

      this.isLoading = false;

      // console.log(this.data);
      // console.log(this.genreName);
    },

    // async getSimilar() {
    //   const response = await fetch(
    //     `https://api.themoviedb.org/3/movie/${this.id}/similar?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&page=1`,
    //     {
    //       headers: {
    //         "content-type": "application/json;charset=utf-8",
    //         authorization:
    //           "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
    //       },
    //     }
    //   );
    //   const dataResponse = await response.json();
    //   this.similar = dataResponse;
    // },
  },
  created() {
    this.getData();
    // this.getSimilar();
  },
};
</script>

<style scoped>
.img {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.textArea {
  position: absolute;
  z-index: 999;
  top: 9vh;
  left: 3rem;
  color: whitesmoke;
  height: 201vh;
  max-width: 50%;
  /* border: 1px solid white; */
  padding: 2rem;
}

.heading {
  font-size: 4rem;
  font-weight: 500;
}
</style>
