<template>
  <the-header v-if="!$route.meta.hideNavbar"></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
