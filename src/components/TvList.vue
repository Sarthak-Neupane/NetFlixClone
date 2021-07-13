<template>
  <router-link :to="getPath">
    <div class="scene">
      <div class="card">
        <div class="face front" :style="getImages"></div>
        <div class="face back"></div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      DisplayGenre: null,
    };
  },
  props: ["poster", "id", "name", "genres", "allGenre"],
  computed: {
    getPath() {
      return this.$route.path + "/" + this.id;
    },
    getImages() {
      if (this.poster) {
        return {
          "background-image":
            "url(http://image.tmdb.org/t/p/w154" + this.poster + ")",
        };
      } else {
        return {
          "background-image": "url(../assets/netflix.jpg)",
        };
      }
    },
  },
  created() {
    this.getGenres();
  },
  methods: {
    getGenres() {
      const displayGenre = [];
      if (this.genres !== []) {
        this.genres.forEach((value) => {
          this.allGenre.forEach((item) => {
            if (item.id === value) {
              displayGenre.push(item.name);
            }
          });
        });
      }
      this.DisplayGenre = displayGenre;
    },
  },
};
</script>

<style scoped>
.scene {
  width: 154px;
  height: 231px;
  perspective: 30em;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.7s;
  transform-style: preserve-3d;
}
.face {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  backface-visibility: hidden;
}

.front {
  /* background-color: #0379ff; */
}

.back {
  background-color: #ccc;
  transform: rotateY(180deg);
}

.scene:hover .card {
  transform: rotateY(180deg);
}
</style>
