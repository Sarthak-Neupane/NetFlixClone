<template>
  <router-link :to="getPath">
    <div :style="{ 'background-image': 'url(' + image + ')' }"></div>
  </router-link>
</template>

<script>
export default {
  props: ["image", "id"],
  computed: {
    getPath() {
      return "/movie/" + this.id;
    },
  },
};
</script>

<style scoped>
div {
  width: 300px;
  height: 168px;
  margin: 0.5rem;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
