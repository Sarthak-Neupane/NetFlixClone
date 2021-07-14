<template>
  <router-link :to="`/${mediaType}/${id}`">
    <div class="first">
      <div class="media">
        <p>{{ mediaType }}</p>
      </div>
      <img :src="`http://image.tmdb.org/t/p/w154${poster}`" />
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <ul>
        <li v-for="genre in genres" :key="genre">{{ genre }}</li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["title", "genres", "poster", "mediaType", "id"],
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.first {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 154px;
  height: 100%;
  margin: 7rem 2rem;
}

ul {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  list-style: none;
}

li {
  margin: 0 0.5rem;
}

h1 {
  font-size: 1rem;
}

.media {
  margin: 0.3rem 0;
  text-align: center;
  width: 100%;
}
</style>
