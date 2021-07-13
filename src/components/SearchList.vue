<template>
  <router-link :to="getPath">
    <div class="imageContainer">
      <div
        class="mainCard"
        :style="{ 'background-image': 'url(' + image + ')' }"
      ></div>
      <h1 v-if="getType">{{ title }}</h1>
      <h1 v-else>{{ name }}</h1>
      <p>{{ type }}</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["image", "id", "title", "genre", "type", "name"],
  data() {
    return {
      movie: null,
    };
  },
  computed: {
    getPath() {
      return `/${this.type}/${this.id}`;
    },
    getType() {
      if (this.type === "movie") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.mainCard {
  width: 300px;
  height: 168px;
  margin: 0.5rem;
  background-size: cover;
  transition: transform 0.5s ease;
  background-position: 50% 50%;
  position: relative;
}

h1 {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 1rem 0;
  max-width: 80%;
  /* background: red; */
  padding: 0.4rem 0.5rem;
  font-weight: 500;
}

.imageContainer {
  overflow: hidden;
  padding: 0;
  /* border: 2px solid red; */
  width: 320px;
  height: 100%;
}

p {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  max-width: 80%;
  padding: 0rem 0.5rem;
  font-weight: 300;
}

a {
  text-decoration: none;
}

.imageContainer:hover .mainCard {
  transform: scale(1.2);
}
</style>
