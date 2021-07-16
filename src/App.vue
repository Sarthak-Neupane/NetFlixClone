<template>
  <the-header v-if="!$route.meta.hideNavbar"></the-header>
  <router-view></router-view>
  <div class="footer">
  <the-footer></the-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
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
  created() {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.footer{
  /* position:absolute;
  bottom: 0;
  left: 0; */
  z-index: 9999;
}
</style>
