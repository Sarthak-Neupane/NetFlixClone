<template>
  <li>
    <router-link :to="getPath">
      <img :src="'https://image.tmdb.org/t/p/w300' + poster" width="235" />
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["poster", "id"],
  computed: {
    getPath() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  transition: all 0.3s ease-in;
  z-index: 9999;
}

li:hover {
  transform: translateY(0px);
}
img {
  object-fit: cover;
  border-radius: 15px;
}
</style>
