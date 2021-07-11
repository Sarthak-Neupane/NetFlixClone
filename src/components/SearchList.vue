<template>
  <div :style="{ 'background-image': 'url(' + image + ')' }"></div>
</template>

<script>
export default {
  props: ["image", "id"],
};
</script>

<style scoped>
div {
  width: 300px;
  height: 168px;
  margin: 1rem;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
