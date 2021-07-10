<template>
  <div class="spinner" v-if="isLoading"><base-spinner></base-spinner></div>
  <section v-else>
    <div class="image">
      <img
        :src="'https://image.tmdb.org/t/p/w780' + data.poster_path"
        height="800"
      />
    </div>
    <div class="textArea"></div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      isLoading: false,
      data: null,
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
      const dataRespose = await response.json();
      this.data = dataRespose;
      this.isLoading = false;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
img {
  height: 99vh;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
