<template>
  <the-header v-if="!$route.meta.hideNavbar"></the-header>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
  methods: {
    ...mapActions(["authAction"]),
  },
  mounted() {
    this.authAction();
  },
  // created() {
  //   this.$store.dispatch("autoLogin");
  // },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
