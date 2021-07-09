<template>
  <li>
    <img :src="'https://image.tmdb.org/t/p/w185' + poster" />
  </li>
</template>

<script>
export default {
  data() {},
  props: ["poster"],
};
</script>

<style scoped>
li {
  margin: 0.5rem;
  max-width: 10rem;
}
</style>
